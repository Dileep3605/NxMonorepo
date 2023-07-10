import { IRoute } from '../models/common.model';

export const LOGIN: IRoute = {
  path: 'login',
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const VERIFY_CODE: IRoute = {
  path: 'verify-code',
  get fullUrl(): string {
    return `${this.path}`;
  },
};

export const FORGOT_PASSWORD: IRoute = {
  path: 'forgot-password',
  get fullUrl(): string {
    return `/${LOGIN.path}/${this.path}`;
  },
};

export const VERIFY_OTP: IRoute = {
  path: 'verify-otp',
  get fullUrl(): string {
    return `/${LOGIN.path}/${this.path}`;
  },
};

export const RESET_PASSWORD: IRoute = {
  path: 'reset-password',
  get fullUrl(): string {
    return `/${LOGIN.path}/${this.path}`;
  },
};

export const LINK_EXPIRED: IRoute = {
  path: 'link-expired',
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const SIGNUP: IRoute = {
  path: 'signup',
  get fullUrl(): string {
    return `${this.path}`;
  },
};

export const LANDING_PAGE: IRoute = {
  path: 'landing-page',
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const REACT_REMOTE: IRoute = {
  path: 'react-remote',
  get fullUrl(): string {
    return `${this.path}`;
  },
};

export const VUE_REMOTE: IRoute = {
  path: 'vue',
  get fullUrl(): string {
    return `${this.path}`;
  },
};

export const GOOGLE_AUTHENTICATOR: IRoute = {
  path: 'google-authenticator',
  get fullUrl(): string {
    return `${this.path}`;
  },
};
