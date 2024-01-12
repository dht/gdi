import { instance } from './_init';

export const list = async () => {
  let response;

  try {
    response = await instance.get('/models');
    return response.data;
  } catch (err: any) {
    errorHandling(err);
  }
};

const errorHandling = (err: any) => {
  if (err.response) {
    console.log(err.response.status);
    console.log(err.response.data);
  } else {
    console.log(err.message);
  }
};
