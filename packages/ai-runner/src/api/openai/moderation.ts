import { normalizeJson } from '../../utils/object';
import { openai } from './_init';

export type ModerationCategory =
  | 'sexual'
  | 'hate'
  | 'harassment'
  | 'self-harm'
  | 'sexual/minors'
  | 'hate/threatening'
  | 'violence/graphic'
  | 'self-harm/intent'
  | 'self-harm/instructions'
  | 'harassment/threatening'
  | 'violence';

export type IModerationResponse = {
  scores: Json;
  violationsCount: number;
  violations: ModerationCategory[];
  flagged: boolean;
  text?: string;
};

export const moderate = async (json: Json): Promise<IModerationResponse> => {
  const data = normalizeJson(json).join(',');

  const output: IModerationResponse = {
    scores: {},
    violationsCount: 0,
    violations: [],
    flagged: true,
    text: data,
  };

  const res: any = await openai.moderations.create({
    input: data,
  });

  try {
    const item = res.results[0];
    const { flagged, categories, category_scores } = item;
    output.flagged = flagged;
    output.scores = category_scores;
    output.violations = Object.keys(categories).filter(
      (key) => categories[key]
    ) as ModerationCategory[];
    output.violationsCount = output.violations.length;
  } catch (_err) {}

  return output;
};
