import { IAction } from 'redux-micro-frontend';

export const AppReducer = (state = initialState, action: IAction) => {
  if (action.type === 'USER_AUTH_TOKEN')
    return { ...state, authToken: action.payload };

  return state;
};

const initialState = {
  global: '',
  local: '',
};
