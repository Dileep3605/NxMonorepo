export const SelectedGlobalLanguage = (lang: string) => {
  return {
    type: 'GLOBAL_LANGUAGE',
    payload: lang,
  };
};

export const GlobalAuthToken = (token: string) => {
  return {
    type: 'AUTH_TOKEN',
    payload: token,
  };
};

export const GlobalAuthorization = (token: string) => {
  return {
    type: 'API_AUTH_TOKEN',
    payload: token,
  };
};


export const GlobalUserAuthToken = (token: string | null) => {
  return {
    type: 'USER_AUTH_TOKEN',
    payload: token,
  };
};

export const GlobalDeviceToken = (token: string | null) => {
  return {
    type: 'DEVICE_TOKEN',
    payload: token,
  };
};
