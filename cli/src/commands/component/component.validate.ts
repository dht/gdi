export const validateArgs = (componentNames: string[]) => {
  const output = {
    isValid: true,
    message: '',
  };

  componentNames.forEach((componentName) => {
    // alow only alphanumeric characters and dash
    const regex = /^[a-zA-Z0-9-]*$/;
    const isValid = regex.test(componentName);

    if (!isValid) {
      output.isValid = false;
      output.message = `Component name "${componentName}" is invalid. Only alphanumeric characters and dash are allowed.`;
    }
  });

  return output;
};
