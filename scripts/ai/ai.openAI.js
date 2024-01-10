const { get } = require('lodash');
const { Configuration, OpenAIApi } = require('openai');

let instance;

const init = (apiKey, organization) => {
  const configuration = new Configuration({
    organization,
    apiKey,
  });

  instance = new OpenAIApi(configuration);
};

const getModels = async () => {
  let response;

  try {
    response = await instance.listModels();
  } catch (err) {
    throw err;
  }

  return response.data;
};

const chatCompletion = async (messages, model) => {
  let response;

  try {
    response = await instance.createChatCompletion({
      model,
      messages,
    });
  } catch (err) {
    throw err;
  }

  return response.data;
};

const completion = async (prompt, model) => {
  let response;

  try {
    response = await instance.createCompletion({
      model,
      prompt,
    });
  } catch (err) {
    throw err;
  }

  return response.data;
};

const parseResponse = (response) => {
  return {
    responseId: response.id,
    content: get(response, 'choices[0].message.content', ''),
    usage: response.usage,
    price: calculatePrice(response),
    isSuccess: true,
  };
};

module.exports = {
  init,
  getModels,
  chatCompletion,
  completion,
  parseResponse,
};
