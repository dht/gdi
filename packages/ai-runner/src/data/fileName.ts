import { Json } from '../types';

export const instructionsFileName: any = {
  unknown: `generate a filename for the following content: {content}. Return only the filename`,
  image: `generate a filename for a jpg image with the following prompt {content}. Return only the filename`,
  txt: `generate a filename for a text file with the following content: "{content}". Return only the filename`,
};
