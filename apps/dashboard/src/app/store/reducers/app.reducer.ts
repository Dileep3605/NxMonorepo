import { IAction } from 'redux-micro-frontend';

export const AppReducer = (state = initialState, action: IAction) => {
  if (action.type === 'LOCAL_LANGUAGE')
    return { ...state, localLang: action.payload };
  if (action.type === 'GLOBAL_LANGUAGE')
    return { ...state, globalLang: action.payload };
  if (action.type === 'API_AUTH_TOKEN')
    return { ...state, authorizationToken: action.payload };
  if (action.type === 'USER_AUTH_TOKEN')
    return { ...state, authToken: action.payload };
  if (action.type === 'DEVICE_TOKEN')
    return { ...state, deviceToken: action.payload };
  return state;
};

const initialState = {
  global: '',
  local: '',
};
