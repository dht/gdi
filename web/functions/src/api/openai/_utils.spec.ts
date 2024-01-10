import { fixtureMessages } from '../../fixtures/fixtures.messages';
import { calculateAssistantCosts, parseModelId, tokenizer } from './_utils';

describe('utils', () => {
  it('parseModelId', () => {
    expect(parseModelId('gpt-4')).toBe('gpt_4');
    expect(parseModelId('gpt-3.5-turbo')).toBe('gpt_3_5_turbo');
    expect(parseModelId('gpt-3.5-turbo-1106')).toBe('gpt_3_5_turbo');
  });

  it('tokenizer', () => {
    expect(tokenizer('Rachel')).toBe(1);
    expect(tokenizer('Rachel:')).toBe(2);
    expect(tokenizer('Rachel:\n')).toBe(3);
    expect(tokenizer('Rachel:\n...')).toBe(3);
    expect(tokenizer('Rachel: ever what?\nplease continue...')).toBe(9);
    expect(
      tokenizer(
        `Sam: Hey guys, have you ever tried beer before?\n\nRachel: Yeah, I've had it at family gatherings before. It's not really my thing, but I've tried a couple of sips.\n\nArnold: I've had it at parties a few times. I don't mind it, but I'm not a huge fan either.\n\nSam: I've had a few beers with my older brother. I think it's an acquired taste. Some of them are not bad, but I can see why it's not for everyone.\n\nRachel: I've heard there are so many different types of beer - like ales, lagers, stouts. It's kind of overwhelming.\n\nArnold: Yeah, it's crazy how many options there are. I think I'd rather stick to soda for now, though.\n\nSam: Same here. I don't think I'll be reaching for a beer anytime soon.`
      )
    ).toBe(194);
  });

  it('calculateAssistantCosts', () => {
    expect(calculateAssistantCosts(fixtureMessages, 'gpt-3.5-turbo-1106')).toEqual({
      inputCount: 8,
      outputCount: 17,
      inputRate: 0.001,
      outputRate: 0.002,
      total: 0.000042,
    });
  });
});
