export const VALIDATION_MESSAGES = {
  confirmPassword: {
    matchPassword: 'Confirm password is not matched with password',
  },
};
export const POPUP_MESSAGES = {
  ok: 'Ok',
  close: 'Close',
  confrim: 'Confirmation',
  no: 'No',
  yes: 'Yes',
  cancel: 'Cancel',
  verify: 'Verify',
  save: 'Save',
  reset: 'Reset',
  passwordResetTitle: 'Reset Password',
  passwordResetLink: 'Password reset otp has been sent to registered email id',
  otpVerifiedSuccess: 'OTP verified successfully',
  passwordChanged: 'Password has been changed successfully.',
  resetPassword: 'Password has been reset successfully.',
  logout: 'Logout',
  logoutConfirmation: 'Do you wish to logout?',
  forgotPasswordTitle:
    "Forgot Your Password? Don't worry send us your registered email address and we will send yousteps to reset your password.",
  verifyPasswordTitle: 'Verify Password',
  verifyPasswordMessage: 'Enter your password',
  warningAdminSessionExpires:
    'If email and phone number is changed, You will be logged out from all devices',
  warningSubAdminSessionExpires:
    'If email and phone number is changed, You will be logged out from all devices',
  resetContentFormTitle: `Reset`,
  resetContentFormMessage: (type: string) =>
    `Are you sure you want to reset ${toTitleCase(type)}?`,
};

export const invalidImageError = (format = 'jpeg/png') =>
  `Only ${format} images are allowed`;

export const invalidFileSize = (size = 1) =>
  `File size can not be more than ${size} MB`;

export const COMMON_MESSAGES = {
  ADDED: (type: string, isUpperCase?: boolean) =>
    toTitleCase(type, isUpperCase) + ' has been added successfully',
  UPDATED: (type: string, isUpperCase?: boolean) =>
    toTitleCase(type, isUpperCase) + ' has been updated successfully',
  BLOCKED: {
    confirm: (type: string, isUpperCase?: boolean) =>
      `Do you want to deactive this ${
        isUpperCase ? type.toUpperCase() : type.toLowerCase()
      }?`,
    success: (type: string, isUpperCase?: boolean) =>
      `${toTitleCase(type, isUpperCase)} has been deactivated successfully`,
  },

  ACTIVE: {
    confirm: (type: string, isUpperCase?: boolean) =>
      `Do you want to active this ${
        isUpperCase ? type.toUpperCase() : type.toLowerCase()
      }?`,
    success: (type: string, isUpperCase?: boolean) =>
      `${toTitleCase(type, isUpperCase)} has been activated successfully`,
  },
  INACTIVE: {
    confirm: (type: string, isUpperCase?: boolean) =>
      `Do you want to deactive this ${
        isUpperCase ? type.toUpperCase() : type.toLowerCase()
      }?`,
    success: (type: string, isUpperCase?: boolean) =>
      `${toTitleCase(type, isUpperCase)} has been deactivated successfully`,
  },
  ACTIVATED: {
    confirm: (type: string, isUpperCase?: boolean) =>
      `Do you want to activate this ${
        isUpperCase ? type.toUpperCase() : type.toLowerCase()
      }?`,
    success: (type: string, isUpperCase?: boolean) =>
      `${toTitleCase(type, isUpperCase)} has been activated successfully`,
  },

  DEACTIVE: {
    confirm: (type: string, isUpperCase?: boolean) =>
      `Do you want to deactivate this ${
        isUpperCase ? type.toUpperCase() : type.toLowerCase()
      }?`,
    success: (type: string, isUpperCase?: boolean) =>
      `${toTitleCase(type, isUpperCase)} has been deactivated successfully`,
  },
  DELETED: {
    confirm: (type: string, isUpperCase?: boolean) =>
      `Do you want to delete this ${
        isUpperCase ? type.toUpperCase() : type.toLowerCase()
      }?`,
    success: (type: string, isUpperCase?: boolean) =>
      `${toTitleCase(type, isUpperCase)} has been deleted successfully`,
  },
  VERIFY: {
    confirm: (type: string, isUpperCase?: boolean) =>
      `Do you want to verify this ${
        isUpperCase ? type.toUpperCase() : type.toLowerCase()
      }?`,
    success: (type: string, isUpperCase?: boolean) =>
      `${toTitleCase(type, isUpperCase)} has been verified successfully`,
  },
};

export const SOMETHING_WENT_WRONG =
  'Something went wrong , Please try again later.';

export const GOOGLE_AUTHENTICATOR_SUCCESS =
  'Google Authenticator setup completed';

export const GOOGLE_AUTHENTICATOR_DISABLED_SUCCESS =
  'Google Authenticator disabled successfully';

export const RESET_SUCCESS = (name: string) => {
  return `${toTitleCase(name)} 2FA account has been resets successfully`;
};

export const LOGIN_SUCCESS = `User signed in successfully`;

export const toTitleCase = (str: string, isUpperCase?: boolean) => {
  return str.replace(/\w\S*/g, function (txt) {
    if (isUpperCase) {
      return txt.toUpperCase();
    }
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
