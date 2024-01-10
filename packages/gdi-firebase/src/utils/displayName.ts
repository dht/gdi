export const initialsFromNameAndEmail = (name: string, email: string) => {
  if (name) {
    const nameParts = name.split(' ');
    const firstName = nameParts.shift() || '';
    const lastName = nameParts.pop() || '';
    const firstInitial = firstName[0] ?? '';
    const lastInitial = lastName[0] ?? '';
    return `${firstInitial}${lastInitial}`;
  } else if (email) {
    const emailParts = email.split('@');
    const emailName = emailParts.shift() || '';
    const emailNameParts = emailName.split('.');
    const firstEmailNamePart = emailNameParts.shift() || '';
    const lastEmailNamePart = emailNameParts.pop() || '';
    const firstEmailInitial = firstEmailNamePart[0] ?? '';
    const lastEmailInitial = lastEmailNamePart[0] ?? '';
    return `${firstEmailInitial}${lastEmailInitial}`.toUpperCase();
  }

  return '';
};
