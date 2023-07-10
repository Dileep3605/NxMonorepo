import { IAction } from 'redux-micro-frontend';

export const LanguageReducer = (state = initialState, action: IAction) => {
  if (action.type === 'LOCAL_LANGUAGE')
    return { ...state, localLang: action.payload };
  if (action.type === 'GLOBAL_LANGUAGE')
    return { ...state, globalLang: action.payload };

  return state;
};

const initialState = {
  global: 'en',
  local: 'en',
};
