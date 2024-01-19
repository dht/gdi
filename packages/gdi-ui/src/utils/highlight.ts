import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('json', json);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('bash', bash);

export const highlight = hljs.highlight;
export const highlightAll = hljs.highlightAll;
export const highlightElement = hljs.highlightElement;

export const highlightJson = (json: Json) => {
  return hljs.highlight(JSON.stringify(json, null, 2), { language: 'json' });
};
