import { useState } from 'react';
import { formValidation } from '../services/formServices/formValidation';

const useForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = form => {
    const formData = new FormData(form);
    const fieldObj = Object.fromEntries(formData.entries());
    console.log(
      '🚀 ~ file: useForm.js ~ line 11 ~ useForm ~ fieldObj',
      fieldObj
    );
    const isFormValid = Object.keys(fieldObj).every(key =>
      formValidation(fieldObj, key)
    );

    const _isEqual = data =>
      isFormValid &&
      Object.keys(fieldObj).every(key => fieldObj[key] === data[key]);

    setIsSubmitted(true);

    return { fieldObj, isFormValid, _isEqual };
  };

  return {
    isLoading,
    isSubmitted,
    validate,
    setIsSubmitted,
    setIsLoading,
  };
};

export { useForm };
