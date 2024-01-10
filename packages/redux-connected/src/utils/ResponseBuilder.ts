import { AxiosResponse } from 'axios';
import { ApiErrorType, IApiRequest, ApiResponse } from '../types';

type Transformer = (items: any) => any;

export class ResponseBuilder {
  private output = {} as ApiResponse<any>;
  private response = {} as AxiosResponse;
  private transformers = [] as Transformer[];
  private timestampStart = 0;

  constructor(request: IApiRequest) {
    this.output = {
      request,
    } as ApiResponse<any>;

    this.timestampStart = Date.now();
  }

  withAxiosResponse(axiosResponse: AxiosResponse) {
    this.response = axiosResponse;
    return this;
  }

  withData(data: any) {
    this.output.data = data;
    return this;
  }

  withIsSuccess(isSuccess: boolean) {
    this.output.isSuccess = isSuccess;
    return this;
  }

  withIsError(isError: boolean) {
    this.output.isError = isError;
    return this;
  }

  withErrorType(errorType: ApiErrorType) {
    this.output.errorType = errorType;
    return this;
  }

  withErrorMessage(errorMessage: string) {
    this.output.errorMessage = errorMessage;
    return this;
  }

  withStatus(status: number) {
    this.output.status = status;
    return this;
  }

  withTransformer(transformer?: Transformer) {
    if (!transformer) {
      return this;
    }

    this.transformers.push(transformer);
    return this;
  }

  build<T = any>(): ApiResponse<T> {
    if (!this.response) {
      return this.output;
    }

    this.output.status = this.response.status;
    this.output.statusText = this.response.statusText;
    this.output.headers = this.response.headers;

    const now = Date.now();
    this.output.timestampStart = this.timestampStart;
    this.output.timestampEnd = now;
    this.output.duration = now - this.timestampStart;
    this.output.data = this.response.data || this.output.data;

    if (this.transformers.length) {
      this.output.data = this.transformers.reduce((acc, transformer) => {
        return transformer(acc);
      }, this.output.data);
    }

    return this.output;
  }
}
