const intro =
  'I am writing a reply for a {postPlatform} post, the audience is {postAudience} and the tone is {postTone}. The post is "{context}".';

export const templates = {
  main: `${intro}. Can you {instructions0}? Return only the reply.`,
  instructions1: `${intro}. My current reply is "{body}". Can you {instructions1}? Return only the new reply.`,
  instructions2: `${intro}. My current reply is "{body}". Can you {instructions2}? Return only the new reply.`,
  instructions3: `${intro}. My current reply is "{body}". Can you {instructions3}? Return only the new reply.`,
};
