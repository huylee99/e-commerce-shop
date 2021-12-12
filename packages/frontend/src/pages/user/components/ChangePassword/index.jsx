import { useState } from 'react';

import InputLabel from '@/components/Input/InputLabel';
import InputField from '@/components/Input/InputField';
import Button from '@/components/Button';
import PasswordConfirmInput from '@/components/Input/PasswordConfirmInput';
import PasswordInput from '@/components/Input/PasswordInput';

import { PasswordProvider } from '@/context/passwordContext';
import { validation } from '@/services/formServices/fieldValidation';
import { formValidation } from '@/services/formServices/formValidation';
import authService from '@/services/authServices';
import userRequest from '@/api/userAPI';

const ChangePassword = () => {
  const [, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    setIsLoading(true);
    const formData = new FormData(event.currentTarget);

    const fieldObj = Object.fromEntries(formData.entries());
    const isFormValid = Object.keys(fieldObj).every(key =>
      formValidation(fieldObj, key)
    );

    setIsSubmitted(true);
    if (
      isFormValid &&
      fieldObj['newPassword'] === fieldObj['passwordConfirm']
    ) {
      delete fieldObj['confirmPassword'];

      userRequest
        .updatePassword(fieldObj)
        .then(response => {
          authService.setToken(response.data.token);
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-5'>
          <h2 className='font-bold text-2xl mb-4'>Change Password</h2>
          <div className='max-w-xs'>
            <div className='mb-4'>
              <InputLabel title='Current Password' htmlFor='currentPassword' />
              <InputField
                type='password'
                name='currentPassword'
                validation={validation.currentPassword}
                isSubmitted={isSubmitted}
              />
            </div>
            <PasswordProvider>
              <div className='mb-4'>
                <InputLabel title='New Password' htmlFor='newPassword' />
                <PasswordInput
                  name='newPassword'
                  validation={validation.newPassword}
                  isSubmitted={isSubmitted}
                />
              </div>
              <div>
                <InputLabel
                  title='Password Confirm'
                  htmlFor='passwordConfirm'
                />
                <PasswordConfirmInput
                  name='passwordConfirm'
                  validation={validation.passwordConfirm}
                  isSubmitted={isSubmitted}
                />
              </div>
            </PasswordProvider>
          </div>
        </div>
        <Button type='submit'>Save</Button>
      </form>
    </div>
  );
};

export default ChangePassword;
