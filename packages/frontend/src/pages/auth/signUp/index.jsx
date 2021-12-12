import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { validation } from '../../../services/formServices/fieldValidation';
import { formValidation } from '../../../services/formServices/formValidation';
import { PasswordProvider } from '@/context/passwordContext';
import { signUp } from '@/features/auth/actions';

import InputLabel from '@/components/Input/InputLabel';
import InputField from '@/components/Input/InputField';
import PasswordInput from '@/components/Input/PasswordInput';
import PasswordConfirmInput from '@/components/Input/PasswordConfirmInput';
import Button from '@/components/Button';
import Container from '@/components/Container';
import SectionDivider from '@/components/SectionDivider';

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const fieldObj = Object.fromEntries(formData.entries());
    const formIsValid = Object.keys(fieldObj).every(key =>
      formValidation(fieldObj, key)
    );

    setIsSubmitted(true);

    if (formIsValid && fieldObj['password'] === fieldObj['confirmPassword']) {
      delete fieldObj['confirmPassword'];
      signUp(fieldObj).then(() => navigate('/shop', { replace: true }));
    }
  };

  return (
    <div>
      <SectionDivider size='lg'>
        <Container size='sm'>
          <div className='w-[350px] mx-auto'>
            <span className='font-bold text-3xl text-green-600 block text-center mb-10'>
              SuperMarket
            </span>
            <h1 className='font-bold text-4xl mb-5'>Register</h1>
            <form onSubmit={handleSubmit}>
              <div className='mb-2'>
                <InputLabel htmlFor='fullName' title='Your name' />
                <InputField name='fullName' validation={validation.fullName} />
              </div>
              <div className='mb-2'>
                <InputLabel htmlFor='email' title='Email Address' />
                <InputField
                  name='email'
                  type='email'
                  validation={validation.email}
                />
              </div>
              <PasswordProvider>
                <div className='mb-2'>
                  <InputLabel htmlFor='password' title='Password' />
                  <PasswordInput
                    name='password'
                    validation={validation.password}
                    isSubmitted={isSubmitted}
                  />
                </div>
                <div className='mb-5'>
                  <InputLabel
                    htmlFor='confirmPassword'
                    title='Re-enter password'
                  />
                  <PasswordConfirmInput
                    name='confirmPassword'
                    validation={validation.confirmPassword}
                    isSubmitted={isSubmitted}
                  />
                </div>
              </PasswordProvider>
              <Button type='submit' size='full'>
                Sign Up
              </Button>
            </form>
          </div>
        </Container>
      </SectionDivider>
    </div>
  );
};

export default SignUp;
