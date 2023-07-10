export const LocalUserAuthToken = (token: string) => {
  return {
    type: 'USER_AUTH_TOKEN',
    payload: token,
  };
};
