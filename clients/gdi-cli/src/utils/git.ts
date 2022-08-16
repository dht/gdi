import Git from 'nodegit';
import { askQuestions } from './prompt';
import { questionsSemantic } from './data/questions.semantic';

export const getMasterCommits = (cwd: string) => {
    Git.Repository.open(cwd)
        .then(function (repo) {
            return repo.getMasterCommit();
        })
        .then((commits) => {
            console.log('commits ->', commits);
        });
};

export const askSemanticCommitQuestions = (scopes: string[]) => {
    return askQuestions(questionsSemantic(scopes));
};
