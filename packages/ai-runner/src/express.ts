import express from 'express';

export type Params = {
  port: number;
  apiKeys: Json;
  allowedDomains: string[];
};

export const startExpress = (params: Params) => {
  const { port, apiKeys, allowedDomains } = params;

  const app = express();
  app.use(express.static('public'));
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};
