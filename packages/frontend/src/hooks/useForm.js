import { useState } from 'react';
import { formValidation } from '../services/formServices/formValidation';

const useForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = form => {
    const formData = new FormData(form);
    const fieldObj = Object.fromEntries(formData.entries());
    const isFormValid = Object.keys(fieldObj).every(key =>
      formValidation(fieldObj, key)
    );
    setIsSubmitted(true);

    return { fieldObj, isFormValid };
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
