import { conversationSplitTranscript, conversationAddPhonetics } from './conversation.utils';
import { variables } from './conversation.fixtures';

describe('conversation', () => {
  it('$conversationSplitTranscript', () => {
    const output = conversationSplitTranscript(variables.transcriptRaw);

    expect(output).toEqual({
      '1': {
        id: '1',
        index: 0,
        speakerName: 'Sam',
        content:
          'Hey guys, have you heard about quantum computing? I stumbled upon an article last night, and it blew my mind.',
      },
      '2': {
        id: '2',
        index: 1,
        speakerName: 'Rachel',
        content:
          "Quantum computing? Sounds fancy. I've heard the term, but I don't really know what it means. Is it like super powerful laptops or something?",
      },
      '3': {
        id: '3',
        index: 2,
        speakerName: 'Arnold',
        content:
          "Not exactly, Rachel. Quantum computers aren't just powerful versions of our computers. They use the principles of quantum mechanics to perform calculations that would be impossible for classical computers to solve in a reasonable time.",
      },
    });
  });

  it('$conversationAddPhonetics', () => {
    const conversation = conversationSplitTranscript(variables.transcriptRaw);
    const output = conversationAddPhonetics(conversation, variables);

    expect(output).toEqual({
      '1': {
        id: '1',
        index: 0,
        speakerName: 'Sam',
        content:
          'Hey guys, have you heard about quantum computing? I stumbled upon an article last night, and it blew my mind.',
        phonetics:
          'heɪ ɡaɪz, hæv juː hɜːrd əˈbaʊt ˈkwɒntəm ˈkəm.pjuː.tɪŋ? aɪ ˈstʌmbld əˈpɒn ən ˈɑːrtɪkl lɑːst naɪt, ænd ɪt bluː maɪ maɪnd.',
      },
      '2': {
        id: '2',
        index: 1,
        speakerName: 'Rachel',
        content:
          "Quantum computing? Sounds fancy. I've heard the term, but I don't really know what it means. Is it like super powerful laptops or something?",
        phonetics:
          'ˈkwɒntəm ˈkəm.pjuː.tɪŋ? saʊndz fænsi. aɪv hɜːrd ðə tɜːm, bʌt aɪ doʊnt ˈriːli noʊ wɒt ɪt miːnz. ɪz ɪt laɪk ˈsuː.pər ˈpaʊərfl ˈlæptɒps ɔːr ˈsʌmθɪŋ?',
      },
      '3': {
        id: '3',
        index: 2,
        speakerName: 'Arnold',
        content:
          "Not exactly, Rachel. Quantum computers aren't just powerful versions of our computers. They use the principles of quantum mechanics to perform calculations that would be impossible for classical computers to solve in a reasonable time.",
        phonetics:
          'nɒt ɪgˈzæktli, ˈreɪtʃəl. ˈkwɒntəm ˈkəm.pjuː.tərz ɑrnʲt ʤʌst ˈpaʊərfl vɜːrʒənz əv aʊər kəmˈpjuː.tərz. ðeɪ juːz ðə prɪnˈsɪpəlz əv ˈkwɒntəm mɪˈkænɪks tə pərˈfɔːrm kælkjʊˈleɪʃənz ðət wʊd biː ɪmˈpɒsəbl fər klæsɪkl kəmˈpjuː.tərz tə sɒlv ɪn ə ˈriːzənəbl taɪm.',
      },
    });
  });
});
