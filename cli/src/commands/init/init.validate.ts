export const validateArgs = (args: string[]) => {
  const output = {
    isValid: true,
    message: '',
  };

  if (args.length !== 1) {
    output.isValid = false;
    output.message = 'Usage: gdi init <project-name>';
  }

  return output;
};
