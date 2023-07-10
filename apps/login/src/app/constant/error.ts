import { toTitleCase } from './messages';
import { PATTERN } from './patterns';

export const PATTERN_ERRORS = (pattern: RegExp, key: string): string => {
  if (pattern == PATTERN.email) {
    return `Please enter a valid ${key.toLowerCase()}`;
  }
  if (pattern == PATTERN.password) {
    return `${toTitleCase(
      key
    )} must be between 8-40 characters, It must have 1 Uppercase (A-Z), 1 lowercase (a-z), 1 number (0-9), and one special character [@, %, &, *, !, #]`;
  }
  if (pattern == PATTERN.name) {
    return `Only characters are allowed`;
  }
  if (pattern == PATTERN.phone || pattern == PATTERN.numberOnly) {
    return `${toTitleCase(key)} must contain only digits`;
  }
  if (pattern == PATTERN.price) {
    return `${toTitleCase(key)} must be numeric`;
  }
  return '';
};
