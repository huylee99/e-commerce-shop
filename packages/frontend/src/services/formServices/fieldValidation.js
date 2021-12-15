import { EMAIL_REGEX } from '../../constant/regex';

const validation = {
  email: value => {
    if (!value) return 'This field is required';

    if (value !== value.toLowerCase())
      return 'All characters must be lower case';

    if (!value.match(EMAIL_REGEX)) return 'Email is not valid';

    return false;
  },
  password: value => {
    if (!value) return 'This field is required';
    if (value.length < 8) return 'Password must be longer than 8 characters';

    return false;
  },
  newPassword: value => {
    if (!value) return 'This field is required';
    if (value.length < 8) return 'Password must be longer than 8 characters';

    return false;
  },
  currentPassword: value => {
    if (!value) return 'This field is required';
    if (value.length < 8) return 'Password must be longer than 8 characters';

    return false;
  },
  confirmPassword: value => {
    if (!value) return 'This field is required';
    if (value.length < 8) return 'Password must be longer than 8 characters';

    return false;
  },
  fullName: value => {
    if (!value) return 'This field is required';

    return false;
  },
  phone: value => {
    if (!value) return 'This field is required';

    return false;
  },
  address: value => {
    if (!value) return 'This field is required';

    return false;
  },
};

export { validation };
