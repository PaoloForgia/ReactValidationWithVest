const EXISTING_USERNAMES_MOCK = ["paolo"];

export const doesUsernameExist = (username?: string) => {
  if (!username) return false;

  return EXISTING_USERNAMES_MOCK.includes(username.toLowerCase());
};
