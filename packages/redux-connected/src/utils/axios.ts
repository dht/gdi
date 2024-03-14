import axios, { AxiosInstance } from 'axios';

type Method = 'get' | 'post' | 'put' | 'delete' | 'patch';

type Response = {
  isSuccess: boolean;
  isError: boolean;
  data: Json[];
  error: string;
};

export class Axios {
  private instance: AxiosInstance;

  constructor(baseUrl: string) {
    this.instance = axios.create({ baseURL: baseUrl });
  }

  run(method: Method, path: string, data: Json = {}): Promise<Response> {
    return new Promise((resolve) => {
      const output: Response = {
        isSuccess: true,
        isError: false,
        data: [],
        error: '',
      };

      return this.instance({
        method: method.toUpperCase(),
        url: path,
        data,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          contentType: 'application/json',
        },
      })
        .then((response) => {
          output.isSuccess = true;
          output.data = response.data;
          resolve(output);
        })
        .catch((error) => {
          output.isSuccess = false;
          output.isError = true;
          output.error = error.message;
          resolve(output);
        });
    });
  }
}
