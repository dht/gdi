import { instance } from './_init';

export const list = async () => {
  let response;

  try {
    response = await instance.get('/voices');
    return response.data;
  } catch (err: any) {
    errorHandling(err);
  }
};

export const get = async (voiceId: string) => {
  let response;

  try {
    response = await instance.get(`/voices/${voiceId}`);
    return response.data;
  } catch (err: any) {
    errorHandling(err);
  }
};

export const batch = (inputs: any[], method: any) => {
  const promises = inputs.map((input: any) => method(input));
  return Promise.all(promises);
};

const errorHandling = (err: any) => {
  if (err.response) {
    console.log(err.response.status);
    console.log(err.response.data);
  } else {
    console.log(err.message);
  }
};
