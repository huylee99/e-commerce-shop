import { useState } from 'react';
import InputLabel from '@/components/Input/InputLabel';
import InputField from '@/components/Input/InputField';
import Button from '@/components/Button';

import { formValidation } from '../../../../services/formServices/formValidation';
import { validation } from '../../../../services/formServices/fieldValidation';

import { updateUser } from '../../../../features/auth/actions';

const UserInfo = () => {
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

    if (isFormValid) updateUser(fieldObj).finally(() => setIsLoading(false));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-5'>
          <h2 className='font-bold text-2xl mb-4'>Personal Information</h2>
          <div className='flex gap-5'>
            <div>
              <InputLabel title='Full Name' htmlFor='fullName' />
              <InputField
                name='fullName'
                validation={validation.fullName}
                isSubmitted={isSubmitted}
              />
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <h2 className='font-bold text-2xl mb-4'>Account Information</h2>
          <div className='flex gap-5 items-end'>
            <div>
              <InputLabel title='Email Address' htmlFor='email' />
              <InputField
                name='email'
                type='email'
                validation={validation.email}
                isSubmitted={isSubmitted}
              />
            </div>
          </div>
        </div>
        <Button type='submit'>Save</Button>
      </form>
    </div>
  );
};

export default UserInfo;
