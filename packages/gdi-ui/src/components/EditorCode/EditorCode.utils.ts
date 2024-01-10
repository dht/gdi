export const prepareSchema = (schema: any) => {
  return [
    {
      uri: schema.$schema ?? '',
      fileMatch: ['*'],
      schema,
    },
  ];
};
