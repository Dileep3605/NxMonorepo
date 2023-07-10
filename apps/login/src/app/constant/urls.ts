export const LOGIN = 'user/login';
export const FORGOT_PASSWORD = 'user/password';
export const CHANGE_PASSWORD = 'user/password';
export const ADMIN = 'user/profile';
export const EDIT_PROFILE = 'user/profile';
export const ADD_NEW_USER = 'user';
export const DISABLE_AUTHENTICATOR = 'user';
export const PERMISSIONS_GROUP = 'user/permission-groups';
export const RESET_PASSWORD = 'user/password';
export const VERIFY_OTP = 'user/verify-otp';
export const LOGOUT = 'user/logout';
export const VALIDATE_TOKEN = (token: string) =>
  `user/check-link?token=${token}`;
export const USER = 'user';
export const FEEDBACK = 'feedback';
export const NOTIFICATION = 'notification';
export const DASHBOARD = 'dashboard';
export const AUTHENTICATOR = 'user/2fa';
export const GET_QR_CODE = 'user/2fa';
export const ACCESS_TOKEN = 'user/access-token';
export const VERIFY_PASSWORD = 'user/verify-password';

// HOST API's //
export const HOST = 'user/host/list';
export const HOST_DELETE = (userId: string) => `user/host/${userId}/delete`;
export const HOST_VERFIY = (userId: string) => `user/host/${userId}/verify`;

export const HOST_BLOCK = (userId: string) => `user/host/${userId}/block`;

export const HOST_UNBLOCK = (userId: string) => `user/host/${userId}/unblock`;

// HOST API's //

// AMENITY API's //

export const AMENITY_LIST_GET = 'user/amenities/list';
export const AMENITY_ACTIVE_PUT = (id: string) => `user/amenities/${id}/active`;
export const AMENITY_INACTIVE_PUT = (id: string) =>
  `user/amenities/${id}/inactive`;
export const AMENITY_DETAIL_GET = (id: string) =>
  `user/amenities/${id}/details`;
export const AMENITY_ADD_POST = `user/amenities/add`;
export const AMENITY_EDIT_PUT = `user/amenities/update`;

// AMENITY API's //

export const USER_DELETE = (userId: string) => `user/users/${userId}/delete`;
export const USER_BLOCK = (userId: string) => `user/${userId}`;

export const USER_UNBLOCK = (userId: string) => `user/${userId}`;
export const USER_DETAIL = (userId: string) => `user/${userId}`;
export const USER_EDIT = (userId: string) => `user/${userId}`;
export const USER_2FA_RESET = (userId: string) => `user/${userId}`;

// CATEGORY API's //

export const CATEGORY_LIST_GET = 'user/category/list';
export const INACTIVATE_CATGEORY = (categoryId: string) =>
  `user/category/${categoryId}/inactive`;
export const ACTIVATE_CATGEORY = (categoryId: string) =>
  `user/category/${categoryId}/active`;
export const CATEGORY_DETAIL_GET = (categoryId: string) =>
  `user/category/${categoryId}/details`;

export const CATEGORY_ADD_POST = 'user/category/add';
export const CATEGORY_UPDATE_POST = 'user/category/update';

// CATEGORY API's //

// CONTENT API's //
export const GET_PAGES = 'cms/pages';
export const UPDATE_PAGES = (id: string) => `cms/${id}`;
export const FAQ_LIST = 'faq';
export const ADD_FAQ = 'faq';
export const UPDATE_FAQ_STATUS = (id: string) => `faq/${id}`;
export const UPDATE_FAQ = (id: string) => `faq/${id}`;
export const DELETE_FAQ = (id: string) => `faq/${id}`;
export const FAQ_QUESTION = (id: string) => `faq/${id}`;

// CONTENT API's //
