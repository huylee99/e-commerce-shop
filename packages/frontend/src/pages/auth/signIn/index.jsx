import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '@/components/Container';
import SectionDivider from '@/components/SectionDivider';

import InputLabel from '@/components/Input/InputLabel';
import InputField from '@/components/Input/InputField';
import Button from '@/components/Button';

import { signIn } from '../../../features/auth/actions';

const SignIn = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeHandler = event => {
    setUser(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const clickHandler = async () => {
    setLoading(true);
    const authenticated = await signIn(user.email, user.password);

    if (authenticated) {
      setLoading(false);
      navigate('/user');
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
            <form className='mb-5'>
              <div className='mb-2'>
                <InputLabel htmlFor='email' title='Email Address' />
                <InputField
                  name='email'
                  type='email'
                  value={user.email}
                  onChange={changeHandler}
                />
              </div>
              <div className='mb-5'>
                <InputLabel htmlFor='password' title='Password' />
                <InputField
                  name='password'
                  type='password'
                  value={user.password}
                  onChange={changeHandler}
                />
              </div>
              <Button size='full' onClick={clickHandler}>
                Sign In
              </Button>
            </form>
            {loading ? <div>Loading...</div> : ''}
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
