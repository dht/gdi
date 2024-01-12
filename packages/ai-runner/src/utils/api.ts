import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AIResponseBuilder } from './response';
import { ExtraConfig } from '../types';
import { get } from 'lodash';

export class Api {
  private output: AIResponseBuilder;

  constructor(private config: AxiosRequestConfig<any>, private extra: ExtraConfig) {
    this.output = new AIResponseBuilder();
  }

  invoke(instance: AxiosInstance): Promise<AIResponseBuilder> {
    return new Promise((resolve, reject) => {
      instance(this.config)
        .then((res) => {
          this.output.withData(res.data);
        })
        .catch((error) => {
          this.output.withStatusCode(error.response.status);

          let errorMessage: string,
            errorCode: string = '';

          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx

            try {
              const { errorXpath } = this.extra;
              const data = JSON.parse(error.response.data.toString('utf-8'));
              errorMessage = get(data, errorXpath.message);
              errorCode = get(data, errorXpath.code);
            } catch (err) {
              errorMessage = error.response.statusText;
            }

            this.output.withError(error.message);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js

            errorMessage = error.message;
          } else {
            // Something happened in setting up the request that triggered an Error
            errorMessage = error.message;
          }

          this.output.withError(errorMessage, errorCode);
        })
        .finally(() => {
          resolve(this.output);
        });
    });
  }
}
