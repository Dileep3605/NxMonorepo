import * as routes from './routes';

export const FORGOT_PASSWORD = `/${routes.LOGIN.path}/${routes.FORGOT_PASSWORD.path}`;
export const VERIFY_PASSWORD = `/${routes.LOGIN.path}/${routes.RESET_PASSWORD.path}`;
export const VERIFY_OTP = `/${routes.LOGIN.path}/${routes.VERIFY_OTP.path}`;
export const RESET_PASSWORD = `/${routes.LOGIN.path}/${routes.RESET_PASSWORD.path}`;
