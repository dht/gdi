import { BaseResponse, IResponseBuilder } from '../types';
import type { Cost } from '@gdi/store-base';

export class AIResponseBuilder implements IResponseBuilder {
  private output: BaseResponse;
  private tsStart: number;

  constructor() {
    this.tsStart = Date.now();

    this.output = {
      id: '',
      status: 'idle',
      meta: {
        tsStart: Date.now(),
      },
      cost: {
        inputCount: 0,
        inputRate: 0,
        total: 0,
      },
      duration: 0,
      durationText: '',
      data: {},
    };
  }

  withData(data: any) {
    const duration = Date.now() - this.tsStart;

    this.output.data = data;
    this.output.status = 'done';
    this.output.isSuccess = true;
    this.output.duration = duration;
    this.output.durationText = (duration / 1000).toFixed(2) + 's';

    return this;
  }

  withCost(cost: Partial<Cost>) {
    this.output.cost = {
      ...this.output.cost,
      ...cost,
    };
    return this;
  }

  withStatusCode(statusCode: number) {
    this.output.meta.statusCode = statusCode;
    return this;
  }

  withError(errorMessage: string, errorCode?: string) {
    this.output.meta.isError = true;
    this.output.meta.errorMessage = errorMessage;
    this.output.meta.errorCode = errorCode;
    this.output.status = 'error';
    this.output.isSuccess = false;
    return this;
  }

  build() {
    this.output.meta.tsEnd = Date.now();
    this.output.meta.duration = this.output.meta.tsEnd - this.output.meta.tsStart;
    return this.output;
  }
}
