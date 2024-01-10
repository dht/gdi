import { Json } from '../types';

type Method = () => Promise<Json>;

type QueueItem = {
  index: number;
  method: Method;
  isRunning: boolean;
  isDone?: boolean;
  isSuccess?: boolean;
  error?: string;
};

export class RateLimitApi {
  private resolve: any;
  private index = 0;
  private runningCount = 0;
  private completedCount = 0;
  private output: Json = {};
  private _log: Json[] = [];
  private interval: any = 0;
  private tsStart = Date.now();

  constructor(private maxSize: number, private debug?: boolean) {}

  private queue: QueueItem[] = [];

  get isDone() {
    return this.queue.every((item) => item.isDone);
  }

  get waiting() {
    return this.queue.filter((item) => !item.isRunning && !item.isDone);
  }

  private log(verb: string) {
    if (!this.debug) {
      return;
    }

    this._log.push({
      verb,
      delta: Date.now() - this.tsStart,
    });
  }

  public add(method: Method) {
    this.queue.push({
      index: this.index++,
      method,
      isRunning: false,
      isDone: false,
    });
  }

  private async runMethod(item: QueueItem) {
    const { index } = item;
    item.isRunning = true;
    this.runningCount++;
    this.log(`run ${index}`);

    try {
      const result = await item.method();
      this.output[result.id] = result;
      item.isSuccess = true;
      this.log(`success ${index}`);
    } catch (err: any) {
      item.isSuccess = false;
      item.error = err.message;
      this.log(`error ${index}`);
    } finally {
      item.isDone = true;
      item.isRunning = false;
      this.runningCount--;
      this.completedCount++;
      this.step();
    }
  }

  private onDone() {
    console.log('queue done');
    clearInterval(this.interval);
    this.resolve(this.output);
  }

  private step() {
    if (this.isDone) {
      this.onDone();
      return;
    }

    if (this.runningCount >= this.maxSize) {
      return;
    }

    const spacesLeft = this.maxSize - this.runningCount;

    for (let i = 0; i < spacesLeft; i++) {
      const item = this.waiting[i];

      if (item) {
        this.runMethod(item);
      }
    }
  }

  public start() {
    this.step();

    this.interval = setInterval(() => {
      this.step();
    }, 500);
  }

  public run() {
    this.runningCount = 0;

    return new Promise((resolve) => {
      this.resolve = resolve;
      this.start();
    });
  }
}

export const delay = (millis: number, data: Json) =>
  new Promise((resolve) => setTimeout(() => resolve(data), millis));
