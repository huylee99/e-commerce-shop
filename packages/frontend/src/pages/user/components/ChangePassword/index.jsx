import { useState } from 'react';
import InputLabel from '@/components/Input/InputLabel';
import InputField from '@/components/Input/InputField';
import Button from '@/components/Button';
import PasswordConfirmInput from '@/components/Input/PasswordConfirmInput';
import PasswordInput from '@/components/Input/PasswordInput';

import { PasswordProvider } from '@/context/passwordContext';
import authService from '@/services/authServices';
import userRequest from '@/api/userAPI';

import { useForm } from '@/hooks/useForm';
import { validation } from '@/services/formServices/fieldValidation';

const ChangePassword = () => {
  const { isLoading, setIsLoading, isSubmitted, validate } = useForm();
  const [notification, setNotification] = useState({ type: '', message: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setIsSuccess(false);
    setNotification({ type: '', message: '' });
    const { fieldObj, isFormValid } = validate(event.currentTarget);

    if (
      isFormValid &&
      fieldObj['newPassword'] === fieldObj['confirmPassword']
    ) {
      delete fieldObj['confirmPassword'];
      setIsLoading(true);
      userRequest
        .updatePassword(fieldObj)
        .then(response => {
          authService.setToken(response.data.token);
          event.target.reset();
          setNotification({
            type: 'success',
            message: 'Your password has been changed successfully!',
          });
          setIsSuccess(true);
        })
        .catch(() =>
          setNotification({
            type: 'error',
            message: 'Your current password does not match our record',
          })
        )
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div>
      <form noValidate onSubmit={handleSubmit} className='mb-5'>
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
                isLoading={isLoading}
              />
            </div>
            <PasswordProvider>
              <div className='mb-4'>
                <InputLabel title='New Password' htmlFor='newPassword' />
                <PasswordInput
                  name='newPassword'
                  validation={validation.newPassword}
                  isSubmitted={isSubmitted}
                  isLoading={isLoading}
                  isSuccess={isSuccess}
                />
              </div>
              <div>
                <InputLabel
                  title='Re-type New Password'
                  htmlFor='confirmPassword'
                />
                <PasswordConfirmInput
                  name='confirmPassword'
                  validation={validation.confirmPassword}
                  isSubmitted={isSubmitted}
                  isLoading={isLoading}
                />
              </div>
            </PasswordProvider>
          </div>
        </div>
        <div className='relative inline-flex justify-center items-center'>
          <Button
            type='submit'
            isLoading={isLoading}
            disabled={isLoading}
            size='w-[100px]'
          >
            Save
          </Button>
        </div>
      </form>
      {notification.message ? (
        <>
          <div
            className={`inline-block px-4 py-2 bg-opacity-10 rounded-md ${
              notification.type === 'error'
                ? 'bg-red-500 text-red-500'
                : 'bg-green-500 text-green-500'
            }`}
          >
            <span className='text-sm font-semibold'>
              {notification.message}
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ChangePassword;
