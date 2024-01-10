export const fixtureFlow = {
  prompt: 'quantum computing',
  flowConfig: {
    flowId: 'fc-005',
    name: 'Park Conversation',
    variables: {
      topic: 'variables.prompt',
    },
  },
  flowApis: {
    conversation: {
      id: 'conversation',
      endpoint: 'speech.conversation',
      vendor: 'elevenLabs',
    },
  },
  flowAssistants: {
    'as-005-transcript': {
      id: 'as-005-transcript',
      name: 'Park chat',
      description:
        'A conversational assistant that generates a conversation between three teenagers.',
      instructions:
        'You are a conversational assistant that generates a conversation between three teenagers. Given a topic, try to simulate a realistic conversation between Sam, Rachel, and Arnold.',
      model: 'gpt-3.5-turbo-1106',
      tools: [],
    },
    'as-005-phonetics': {
      id: 'as-005-phonetics',
      name: 'Phonetics Tutor',
      description: 'A phonetics expert that provides phonetic representation of sentences.',
      instructions:
        'You are an expert in phonetics. Given a conversation between 3 teenagers, provide the phonetic representation of each sentence. Return only the conversation with phonetics instead of english.',
      model: 'gpt-3.5-turbo-1106',
      tools: [],
    },
  },
  flowNodes: {
    'n-001': {
      id: 'n-001',
      name: 'Transcript',
      assistantId: 'as-005-transcript',
      input: {
        prompt: 'generate a conversation about ${topic}',
      },
      variables: {
        transcriptRaw: '[0].content[0].text.value',
        transcriptLines: '$conversationSplitTranscript',
      },
      parentId: '',
      completionParams: {
        maxTokens: 200,
      },
      isStart: true,
    },
    'n-002': {
      id: 'n-002',
      name: 'Phonetics',
      assistantId: 'as-005-phonetics',
      input: {
        prompt: 'generate a phonetic representation of ${transcriptRaw}',
      },
      variables: {
        transcriptPhonetics: '[0].content[0].text.value',
        transcriptLines: '$conversationAddPhonetics',
      },
      parentId: 'n-001',
    },
    'n-003': {
      id: 'n-003',
      name: 'Speech',
      parentId: 'n-001',
      apiId: 'conversation',
      input: {
        transcript: '${transcriptLines}',
      },
      variables: {
        transcriptAudios: 'files',
      },
    },
    'n-004': {
      id: 'n-004',
      name: 'Play',
      parentId: ['n-002', 'n-003'],
      isEnd: true,
    },
  },
};

export const fixtureOutput = {
  variables: {
    transcriptPhonetics:
      'Sam: /heɪ gaɪz, hæv ju hɜrd əbaʊt ˈkwɒntəm kəmˈpjuːtɪŋ? ɪts laɪk ðɪs ˈsuːpər ədˈvænst taɪp əv kəmˈpjuːtɪŋ tɛkˈnɒlədʒi ðæts səˈpoʊzd tu tʃeɪnd͡ʒ ˈɛvriθɪŋ./\n\nRachel: /jɛə, aɪ riːd ən ˈɑːrtɪkəl əˈbaʊt ɪt ði ʌðər deɪ. ɪt’s ɔːl əˈbaʊt ˈjuːzɪŋ ðə ˈprɪnsəpəlz əv ˈkwɒntəm mɪˈkænɪks tu pərˈfɔrm ˌkɒmpjʊˈteɪʃənz, raɪt?/\n\nArnold: /ðæts kəˈrɛkt. bʌt ɪts nɒt dʒʌst ə slaɪt ɪmˈpruːvmənt. ˈkwɒntəm kəmˈpjuːtərz kæn pəʊˈtɛnʃəli sɒlv kəmˈplɛks ˈprɒbləmz ðæt ɑːr prækˈtɪkli ɪmˈpɒsəbəl fɔːr ˈklæsɪkəl kəmˈpjuːtərz tu ˈhændəl./\n\nSam: /soʊ, wɒt meɪks ðɛm soʊ ˈspɛʃəl kəmˈpeərd tu ˈrɛgjələr kəmˈpjuːtərz?/\n\nRachel: /wɛl, trəˈdɪʃənəl kəmˈpjuːtərz juːz bɪts æz ðə ˈbeɪsɪk ˈjuːnɪt əv ˌɪnfərˈmeɪʃən, wɪtʃ kæn bi ˈaɪðər ə ˈzɪəroʊ ɔr ə ˈwʌn. bʌt ˈkwɒntəm kəmˈpjuːtərz juːz ˈkwɒntəm bɪts, ɔr ˈkjuːbɪts, wɪtʃ kæn bi boʊθ ˈzɪəroʊ ænd ˈwʌn æt ðə seɪm taɪm θæŋks tu ˈsʌmθɪŋ kɔːld ˌsuːpərpəˈzɪʃən./\n\nArnold: /raɪt, ænd ðerz ˈɔːlsoʊ ˌɛntæŋɡəlˈmɛnt. wɛn ˈkjuːbɪts bɪˈkʌm ɛnˈtæŋɡəld, ðə steɪt əv wʌn ˈkjuːbɪt kæn dɪˈpɛnd ɒn ðə steɪt əv əˈnʌðər, noʊ ˈmætər haʊ fɑːr əˈpɑːrt ðeɪ ɑːr. ðæts wɒt ˈaɪnstaɪn kɔːld "ˈspuːki ˈækʃən æt ə dɪsˈtæns."/\n\nSam: /ˈspuːki ɪz raɪt. ɪt ˈsaʊndz laɪk ˈsʌmθɪŋ streɪt aʊt əv ə ˈsaɪ faɪ ˈmuːvi. bʌt wɒt kæn wi ˈækʃjʊəli duː wɪð ˈkwɒntəm kəmˈpjuːtərz?/\n\nRachel: /ðeər ɪkˈspɛktɪd tuː bi ˈrɪli ˈjuːsfʊl ɪn fiːldz ðæt rɪˈkwaɪər ə lɒt əv ˌkɒmpjuːˈteɪʃənəl paʊər, laɪk ˈsɪmjəˌleɪtɪŋ ˈmɒljʊkiːlz fɔːr drʌg dɪˈvɛləpmənt, ˈɒptɪˌmaɪzɪŋ kəmˈplɛks ˈsɪstəmz, ænd ˈiːvən ɪn ˌkrɪptəˈɡræfi./\n\nArnold: /fər ˈɛɡzæmpəl, ˈkwɒntəm kəmˈpjuːtərz kəd θɪˈɔrɪtɪkli breɪk ˈmeni əv ðə ɪnˌkrɪpʃən ˈælgərɪðmz wi raɪ ˈɒn fɔːr sɪˈkjuər kəˌmjuːnɪˈkeɪʃən ɒn ðə ˈɪntərˌnɛt. ðæts wʌn ˈriːzən waɪ sʌm ˈpiːpəl ɑːr ˈwɜrɪd əˈbaʊt ðɛm./\n\nSam: /aɪ kæn siː waɪ. bʌt ˈhævənt aɪ hɜrd ðæt ðeɪr ˈɔːlsoʊ ˈɡoʊɪŋ tu hɛlp wɪð kriːˈeɪtɪŋ njuː, sɪˈkjʊər ɪnˈkrɪpʃən ˈmɛθədz?/\n\nRachel: /jɛs, ðæts ðə flɪp saɪd. ˈkwɒntəm ɪnˈkrɪpʃən ɪz səˈpoʊzd tu bi ˈsuːpər sɪˈkjʊər bɪˈkɔːz ɪts beɪst ɒn ðə lɔz əv ˈfɪzɪks, nɒt d͡ʒʌst ˌmæθəˈmætɪkəl kəmˈplɛksɪti./\n\nArnold: /ɔːl əv ðɪs ɪz ˈfæsɪˌneɪtɪŋ, bʌt let\'s nɒt fərˈɡɛt ðæt ˈkwɒntəm kəmˈpjuːtɪŋ ɪz stɪl ɪn ɪts ˈɜrli steɪd͡ʒɪz. ðiːz kəmˈpjuːtərz ɑːr ɪnˈkrɛdəbli hɑːrd tu bɪld ænd mɛnˈteɪn bɪˈkɔːz ˈkjuːbɪts ɑːr ɪkˈstriːmli ˈsɛnsɪtɪv tu ðer ɪnˈvaɪrənmənt./\n\nSam: /jɛə, ðeɪ niːd tu bi ˈkɛpt æt ˈsuːpər koʊld ˈtɛmpərətʃərz, raɪt?/\n\nRachel: /ɪgˈzæktli. nɪər ˈæbsəluːt ziːroʊ, tu bi prɪˈsaɪs, wɪtʃ teɪks ə lɒt əv ˈspɛʃəlaɪzd ɪˈkwɪpmənt./\n\nArnold: /ænd ˈiːvən wɪθ ðæt, ðeɪr ˈproʊn tu ˈɛrərz, soʊ ˈkʌrənt ˈkwɒntəm kəmˈpjuːtərz niːd ˈɛrə kəˈrɛkʃən, wɪtʃ rɪˈkwaɪərz ˈiːvən mɔːr ˈkjuːbɪts./\n\nSam: /saʊndz laɪk ɪts ˈɡoʊɪŋ tu bi ə ˈwaɪl bɪˈfɔːr wi hæv ˈkwɒntəm kəmˈpjuːtərz rɪˈpleɪsɪŋ aʊər ˈsmɑːrtfoʊnz ðɛn./\n\nRachel: /ˈdɛfɪnɪtli! bʌt ˈkʌmpəniz laɪk aɪˈbiːˈɛm, ˈɡuːɡəl, ænd ˈʌðərz ɑːr ˈmeɪkɪŋ ˈstɛdi ˈprɒɡrɛs, soʊ huː ˈnoʊz wɒt ðə ˈfjʊtʃər hoʊldz?/\n\nArnold: /ɪgˈzæktli. wi maɪt d͡ʒʌst siː ə ˈkwɒntəm ˌrɛvəˈluːʃən ɪn aʊər ˈlaɪftaɪmz. aɪ kænt weɪt tu siː wɛər ɪt ˈgoʊz!/',
    prompt: 'quantum computing',
    topic: 'quantum computing',
    transcriptRaw:
      "Sam: Hey guys, have you heard about quantum computing? It's like this super advanced type of computing technology that’s supposed to change everything.\n\nRachel: Yeah, I read an article about it the other day. It’s all about using the principles of quantum mechanics to perform computations, right?\n\nArnold: That's correct. But it's not just a slight improvement. Quantum computers can potentially solve complex problems that are practically impossible for classical computers to handle.\n\nSam: So, what makes them so special compared to regular computers?\n\nRachel: Well, traditional computers use bits as the basic unit of information, which can be either a 0 or a 1. But quantum computers use quantum bits, or qubits, which can be both 0 and 1 at the same time thanks to something called superposition.\n\nArnold: Right, and there’s also entanglement. When qubits become entangled, the state of one qubit can depend on the state of another, no matter how far apart they are. That's what Einstein called \"spooky action at a distance.\"\n\nSam: Spooky is right. It sounds like something straight out of a sci-fi movie. But what can we actually do with quantum computers?\n\nRachel: They’re expected to be really useful in fields that require a lot of computational power, like simulating molecules for drug development, optimizing complex systems, and even in cryptography.\n\nArnold: For example, quantum computers could theoretically break many of the encryption algorithms we rely on for secure communication on the internet. That's one reason why some people are worried about them.\n\nSam: I can see why. But haven't I heard that they're also going to help with creating new, secure encryption methods?\n\nRachel: Yes, that's the flip side. Quantum encryption is supposed to be super secure because it's based on the laws of physics, not just mathematical complexity.\n\nArnold: All of this is fascinating, but let's not forget that quantum computing is still in its early stages. These computers are incredibly hard to build and maintain because qubits are extremely sensitive to their environment.\n\nSam: Yeah, they need to be kept at super cold temperatures, right?\n\nRachel: Exactly. Near absolute zero, to be precise, which takes a lot of specialized equipment.\n\nArnold: And even with that, they're prone to errors, so current quantum computers need error correction, which requires even more qubits.\n\nSam: Sounds like it's going to be a while before we have quantum computers replacing our smartphones then.\n\nRachel: Definitely! But companies like IBM, Google, and others are making steady progress, so who knows what the future holds?\n\nArnold: Exactly. We might just see a quantum revolution in our lifetimes. I can’t wait to see where it goes!",
    transcriptLines: {
      '1': {
        id: '1',
        index: 0,
        speakerName: 'Sam',
        content:
          "Hey guys, have you heard about quantum computing? It's like this super advanced type of computing technology that’s supposed to change everything.",
        phonetics:
          '/heɪ gaɪz, hæv ju hɜrd əbaʊt ˈkwɒntəm kəmˈpjuːtɪŋ? ɪts laɪk ðɪs ˈsuːpər ədˈvænst taɪp əv kəmˈpjuːtɪŋ tɛkˈnɒlədʒi ðæts səˈpoʊzd tu tʃeɪnd͡ʒ ˈɛvriθɪŋ./',
      },
      '2': {
        id: '2',
        index: 1,
        speakerName: 'Rachel',
        content:
          'Yeah, I read an article about it the other day. It’s all about using the principles of quantum mechanics to perform computations, right?',
        phonetics:
          '/jɛə, aɪ riːd ən ˈɑːrtɪkəl əˈbaʊt ɪt ði ʌðər deɪ. ɪt’s ɔːl əˈbaʊt ˈjuːzɪŋ ðə ˈprɪnsəpəlz əv ˈkwɒntəm mɪˈkænɪks tu pərˈfɔrm ˌkɒmpjʊˈteɪʃənz, raɪt?/',
      },
      '3': {
        id: '3',
        index: 2,
        speakerName: 'Arnold',
        content:
          "That's correct. But it's not just a slight improvement. Quantum computers can potentially solve complex problems that are practically impossible for classical computers to handle.",
        phonetics:
          '/ðæts kəˈrɛkt. bʌt ɪts nɒt dʒʌst ə slaɪt ɪmˈpruːvmənt. ˈkwɒntəm kəmˈpjuːtərz kæn pəʊˈtɛnʃəli sɒlv kəmˈplɛks ˈprɒbləmz ðæt ɑːr prækˈtɪkli ɪmˈpɒsəbəl fɔːr ˈklæsɪkəl kəmˈpjuːtərz tu ˈhændəl./',
      },
      '4': {
        id: '4',
        index: 3,
        speakerName: 'Sam',
        content: 'So, what makes them so special compared to regular computers?',
        phonetics: '/soʊ, wɒt meɪks ðɛm soʊ ˈspɛʃəl kəmˈpeərd tu ˈrɛgjələr kəmˈpjuːtərz?/',
      },
      '5': {
        id: '5',
        index: 4,
        speakerName: 'Rachel',
        content:
          'Well, traditional computers use bits as the basic unit of information, which can be either a 0 or a 1. But quantum computers use quantum bits, or qubits, which can be both 0 and 1 at the same time thanks to something called superposition.',
        phonetics:
          '/wɛl, trəˈdɪʃənəl kəmˈpjuːtərz juːz bɪts æz ðə ˈbeɪsɪk ˈjuːnɪt əv ˌɪnfərˈmeɪʃən, wɪtʃ kæn bi ˈaɪðər ə ˈzɪəroʊ ɔr ə ˈwʌn. bʌt ˈkwɒntəm kəmˈpjuːtərz juːz ˈkwɒntəm bɪts, ɔr ˈkjuːbɪts, wɪtʃ kæn bi boʊθ ˈzɪəroʊ ænd ˈwʌn æt ðə seɪm taɪm θæŋks tu ˈsʌmθɪŋ kɔːld ˌsuːpərpəˈzɪʃən./',
      },
      '6': {
        id: '6',
        index: 5,
        speakerName: 'Arnold',
        content:
          'Right, and there’s also entanglement. When qubits become entangled, the state of one qubit can depend on the state of another, no matter how far apart they are. That\'s what Einstein called "spooky action at a distance."',
        phonetics:
          '/raɪt, ænd ðerz ˈɔːlsoʊ ˌɛntæŋɡəlˈmɛnt. wɛn ˈkjuːbɪts bɪˈkʌm ɛnˈtæŋɡəld, ðə steɪt əv wʌn ˈkjuːbɪt kæn dɪˈpɛnd ɒn ðə steɪt əv əˈnʌðər, noʊ ˈmætər haʊ fɑːr əˈpɑːrt ðeɪ ɑːr. ðæts wɒt ˈaɪnstaɪn kɔːld "ˈspuːki ˈækʃən æt ə dɪsˈtæns."/',
      },
      '7': {
        id: '7',
        index: 6,
        speakerName: 'Sam',
        content:
          'Spooky is right. It sounds like something straight out of a sci-fi movie. But what can we actually do with quantum computers?',
        phonetics:
          '/ˈspuːki ɪz raɪt. ɪt ˈsaʊndz laɪk ˈsʌmθɪŋ streɪt aʊt əv ə ˈsaɪ faɪ ˈmuːvi. bʌt wɒt kæn wi ˈækʃjʊəli duː wɪð ˈkwɒntəm kəmˈpjuːtərz?/',
      },
      '8': {
        id: '8',
        index: 7,
        speakerName: 'Rachel',
        content:
          'They’re expected to be really useful in fields that require a lot of computational power, like simulating molecules for drug development, optimizing complex systems, and even in cryptography.',
        phonetics:
          '/ðeər ɪkˈspɛktɪd tuː bi ˈrɪli ˈjuːsfʊl ɪn fiːldz ðæt rɪˈkwaɪər ə lɒt əv ˌkɒmpjuːˈteɪʃənəl paʊər, laɪk ˈsɪmjəˌleɪtɪŋ ˈmɒljʊkiːlz fɔːr drʌg dɪˈvɛləpmənt, ˈɒptɪˌmaɪzɪŋ kəmˈplɛks ˈsɪstəmz, ænd ˈiːvən ɪn ˌkrɪptəˈɡræfi./',
      },
      '9': {
        id: '9',
        index: 8,
        speakerName: 'Arnold',
        content:
          "For example, quantum computers could theoretically break many of the encryption algorithms we rely on for secure communication on the internet. That's one reason why some people are worried about them.",
        phonetics:
          '/fər ˈɛɡzæmpəl, ˈkwɒntəm kəmˈpjuːtərz kəd θɪˈɔrɪtɪkli breɪk ˈmeni əv ðə ɪnˌkrɪpʃən ˈælgərɪðmz wi raɪ ˈɒn fɔːr sɪˈkjuər kəˌmjuːnɪˈkeɪʃən ɒn ðə ˈɪntərˌnɛt. ðæts wʌn ˈriːzən waɪ sʌm ˈpiːpəl ɑːr ˈwɜrɪd əˈbaʊt ðɛm./',
      },
      '10': {
        id: '10',
        index: 9,
        speakerName: 'Sam',
        content:
          "I can see why. But haven't I heard that they're also going to help with creating new, secure encryption methods?",
        phonetics:
          '/aɪ kæn siː waɪ. bʌt ˈhævənt aɪ hɜrd ðæt ðeɪr ˈɔːlsoʊ ˈɡoʊɪŋ tu hɛlp wɪð kriːˈeɪtɪŋ njuː, sɪˈkjʊər ɪnˈkrɪpʃən ˈmɛθədz?/',
      },
      '11': {
        id: '11',
        index: 10,
        speakerName: 'Rachel',
        content:
          "Yes, that's the flip side. Quantum encryption is supposed to be super secure because it's based on the laws of physics, not just mathematical complexity.",
        phonetics:
          '/jɛs, ðæts ðə flɪp saɪd. ˈkwɒntəm ɪnˈkrɪpʃən ɪz səˈpoʊzd tu bi ˈsuːpər sɪˈkjʊər bɪˈkɔːz ɪts beɪst ɒn ðə lɔz əv ˈfɪzɪks, nɒt d͡ʒʌst ˌmæθəˈmætɪkəl kəmˈplɛksɪti./',
      },
      '12': {
        id: '12',
        index: 11,
        speakerName: 'Arnold',
        content:
          "All of this is fascinating, but let's not forget that quantum computing is still in its early stages. These computers are incredibly hard to build and maintain because qubits are extremely sensitive to their environment.",
        phonetics:
          "/ɔːl əv ðɪs ɪz ˈfæsɪˌneɪtɪŋ, bʌt let's nɒt fərˈɡɛt ðæt ˈkwɒntəm kəmˈpjuːtɪŋ ɪz stɪl ɪn ɪts ˈɜrli steɪd͡ʒɪz. ðiːz kəmˈpjuːtərz ɑːr ɪnˈkrɛdəbli hɑːrd tu bɪld ænd mɛnˈteɪn bɪˈkɔːz ˈkjuːbɪts ɑːr ɪkˈstriːmli ˈsɛnsɪtɪv tu ðer ɪnˈvaɪrənmənt./",
      },
      '13': {
        id: '13',
        index: 12,
        speakerName: 'Sam',
        content: 'Yeah, they need to be kept at super cold temperatures, right?',
        phonetics: '/jɛə, ðeɪ niːd tu bi ˈkɛpt æt ˈsuːpər koʊld ˈtɛmpərətʃərz, raɪt?/',
      },
      '14': {
        id: '14',
        index: 13,
        speakerName: 'Rachel',
        content:
          'Exactly. Near absolute zero, to be precise, which takes a lot of specialized equipment.',
        phonetics:
          '/ɪgˈzæktli. nɪər ˈæbsəluːt ziːroʊ, tu bi prɪˈsaɪs, wɪtʃ teɪks ə lɒt əv ˈspɛʃəlaɪzd ɪˈkwɪpmənt./',
      },
      '15': {
        id: '15',
        index: 14,
        speakerName: 'Arnold',
        content:
          "And even with that, they're prone to errors, so current quantum computers need error correction, which requires even more qubits.",
        phonetics:
          '/ænd ˈiːvən wɪθ ðæt, ðeɪr ˈproʊn tu ˈɛrərz, soʊ ˈkʌrənt ˈkwɒntəm kəmˈpjuːtərz niːd ˈɛrə kəˈrɛkʃən, wɪtʃ rɪˈkwaɪərz ˈiːvən mɔːr ˈkjuːbɪts./',
      },
      '16': {
        id: '16',
        index: 15,
        speakerName: 'Sam',
        content:
          "Sounds like it's going to be a while before we have quantum computers replacing our smartphones then.",
        phonetics:
          '/saʊndz laɪk ɪts ˈɡoʊɪŋ tu bi ə ˈwaɪl bɪˈfɔːr wi hæv ˈkwɒntəm kəmˈpjuːtərz rɪˈpleɪsɪŋ aʊər ˈsmɑːrtfoʊnz ðɛn./',
      },
      '17': {
        id: '17',
        index: 16,
        speakerName: 'Rachel',
        content:
          'Definitely! But companies like IBM, Google, and others are making steady progress, so who knows what the future holds?',
        phonetics:
          '/ˈdɛfɪnɪtli! bʌt ˈkʌmpəniz laɪk aɪˈbiːˈɛm, ˈɡuːɡəl, ænd ˈʌðərz ɑːr ˈmeɪkɪŋ ˈstɛdi ˈprɒɡrɛs, soʊ huː ˈnoʊz wɒt ðə ˈfjʊtʃər hoʊldz?/',
      },
      '18': {
        id: '18',
        index: 17,
        speakerName: 'Arnold',
        content:
          'Exactly. We might just see a quantum revolution in our lifetimes. I can’t wait to see where it goes!',
        phonetics:
          '/ɪgˈzæktli. wi maɪt d͡ʒʌst siː ə ˈkwɒntəm ˌrɛvəˈluːʃən ɪn aʊər ˈlaɪftaɪmz. aɪ kænt weɪt tu siː wɛər ɪt ˈgoʊz!/',
      },
    },
  },
  nodeState: {
    'n-001': {
      id: 'n-001',
      runId: 'run_7DGlze4rwDKyyPoVYhkvwmrR',
      threadId: 'thread_FZg3586Tyqag94yHqPEcpczb',
      status: 'done',
      tsStart: 1700791834093,
      tsEnd: 1700791865378,
      duration: 31285,
    },
  },
  assistantIds: {
    'as-005-transcript': 'asst_huHSK6iuFyjbp26C0lhxyfIE',
    'as-005-phonetics': 'asst_BzCOutX1xMRP6zt9AOl43349',
  },
};

export const generateNodeState = (arr: string[]) =>
  ({
    'n-001': {
      id: 'n-001',
      status: arr[0],
    },
    'n-002': {
      id: 'n-002',
      status: arr[1],
    },
    'n-003': {
      id: 'n-003',
      status: arr[2],
    },
  } as any);
