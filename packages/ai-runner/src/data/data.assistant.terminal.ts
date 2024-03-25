export const createTerminalAssistant = () => ({
  id: 'as-mac-command',
  name: 'Mac Terminal Command Assistant',
  description: 'An assistant that provides terminal commands for Mac users.',
  instructions:
    'You can ask for terminal commands for various tasks on a Mac, assuming all necessary software is already installed. Return the command only without any additional information.',
  model: 'gpt-3.5-turbo-1106',
});
