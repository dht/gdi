import { BaseResponse, IResponseBuilder } from '../types';
import type { Cost } from '@gdi/store-base';

export class AIResponseBuilder implements IResponseBuilder {
  private output: BaseResponse;

  constructor() {
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
      data: {},
    };
  }

  withData(data: any) {
    this.output.data = data;
    this.output.status = 'done';
    this.output.isSuccess = true;
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
