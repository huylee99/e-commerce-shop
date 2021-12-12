import { validation } from './fieldValidation';

const formValidation = (values, key) => {
  if (validation[key](values[key])) {
    return false;
  }

  return true;
};

export { formValidation };
