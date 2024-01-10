const axios = require('axios');
const { initializeApp } = require('firebase/app');
const { getFunctions, httpsCallable, httpsCallableFromURL } = require('firebase/functions');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const { config } = require('dotenv');
const { OpenAI } = require('openai');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const EMULATOR = true;

config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

let token;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const functions = getFunctions(app);

const baseUrl = EMULATOR
  ? 'http://localhost:5001/usegdi-a56c4/us-central1'
  : 'https://us-central1-usegdi-a56c4.cloudfunctions.net'; // Replace with your Firebase Function URL

const saveKeys = () => {
  const data = {
    openAI: 'write a song about fun',
  };

  return invokeApi('post', '/api/ai/account/keys', data);
};

const completion = () => {
  const data = {
    prompt: 'what is the first letter in the abc?',
  };

  return invokeApi('post', '/api/ai/chat', data);
};

const vision = () => {
  const data = {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg',
  };

  return invokeApi('post', '/api/ai/vision', data);
};

const login = () => {
  const data = {};

  return invokeApi('post', '/api/account/login', data);
};

const ping = () => {
  const data = {
    prompt: 'what is the first letter in the abc?',
  };

  const callChat = httpsCallableFromURL(
    functions,
    'https://us-central1-usegdi-a56c4.cloudfunctions.net/api/chat'
  );

  return callChat(data);
  // return invokeApi('post', '/ping', data);
};

const assistance = async () => {
  // const assistant = await openai.beta.assistants.create({
  //   name: 'Data visualizer',
  //   description:
  //     'You are great at creating beautiful data visualizations. You analyze data present in .csv files, understand trends, and come up with data visualizations relevant to those trends. You also share a brief text summary of the trends observed.',
  //   model: 'gpt-3.5-turbo-1106',
  //   tools: [{ type: 'code_interpreter' }],
  //   file_ids: [],
  // });
  //

  const assistantId = 'asst_NRYusXXgbJVSTxnSNSaTzgZX';

  // const thread = await openai.beta.threads.create({
  //   messages: [
  //     {
  //       role: 'user',
  //       content: 'Write a poem about life',
  //       file_ids: [],
  //     },
  //   ],
  // });
  //

  const threadId = 'thread_XFAIiPgfe4wGh31K2kaDcQ8G';

  // const run = await openai.beta.threads.runs.create(threadId, { assistant_id: assistantId });

  const runId = 'run_ALxI2UOZASODbBw4vLjOtRhk';

  const list = await openai.beta.threads.messages.list(threadId);
};

const invokeApi = (method, path, data) => {
  return axios({
    method: method,
    url: `${baseUrl}${path}`,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log('Response:', response.data);
      // Handle the response from the Firebase Function
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle errors if the request fails
    });
};

const run = async () => {
  await signInWithEmailAndPassword(auth, 'temp@trygdi.com', 'temp123');

  const user = auth.currentUser;

  token = await user.getIdToken(true);

  await login();
  // await assistance();
  await completion();
  // await ping();
  // create user email password
};

run();
