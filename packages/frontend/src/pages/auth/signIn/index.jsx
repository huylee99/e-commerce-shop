import { useNavigate, useSearchParams } from 'react-router-dom';

import Container from '@/components/Container';
import SectionDivider from '@/components/SectionDivider';

import { validation } from '../../../services/formServices/fieldValidation';

import InputLabel from '@/components/Input/InputLabel';
import InputField from '@/components/Input/InputField';

import Button from '@/components/Button';

import { signIn } from '../../../features/auth/actions';
import { formValidation } from '../../../services/formServices/formValidation';

const SignIn = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const redirectURL = searchParams.get('redirect');

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const fieldObj = Object.fromEntries(formData.entries());
    const isFormValid = Object.keys(fieldObj).every(key =>
      formValidation(fieldObj, key)
    );

    if (isFormValid) {
      signIn(fieldObj).then(() =>
        navigate(`${redirectURL ? redirectURL : '/user'}`, { replace: true })
      );
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
            <h1 className='font-bold text-4xl mb-5'>Login</h1>
            <form className='mb-5' onSubmit={handleSubmit}>
              <div className='mb-2'>
                <InputLabel htmlFor='email' title='Email Address' />
                <InputField
                  name='email'
                  type='email'
                  validation={validation.email}
                />
              </div>
              <div className='mb-5'>
                <InputLabel htmlFor='password' title='Password' />
                <InputField
                  name='password'
                  type='password'
                  validation={validation.password}
                />
              </div>
              <Button type='submit' size='full'>
                Sign In
              </Button>
            </form>

            <div className='text-base font-semibold'>
              <span>New to SuperMarket?</span>{' '}
              <span className='text-green-600 cursor-pointer hover:underline'>
                Register here
              </span>
            </div>
          </div>
        </Container>
      </SectionDivider>
    </div>
  );
};

export default SignIn;
