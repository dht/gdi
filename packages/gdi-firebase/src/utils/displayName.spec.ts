import { initialsFromNameAndEmail } from './displayName';

describe('initialsFromNameAndEmail', () => {
  it('name', () => {
    expect(initialsFromNameAndEmail('John Doe', '')).toBe('JD');
    expect(initialsFromNameAndEmail('John', '')).toBe('J');
    expect(initialsFromNameAndEmail('', 'john.doe@gmail.com')).toBe('JD');
    expect(initialsFromNameAndEmail('', 'john@gmail.com')).toBe('J');
    expect(initialsFromNameAndEmail('', '')).toBe('');
  });
});
