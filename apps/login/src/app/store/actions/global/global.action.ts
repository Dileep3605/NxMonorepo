export const GlobalUserAuthToken = (token: string) => {
  return {
    type: 'USER_AUTH_TOKEN',
    payload: token,
  };
};
