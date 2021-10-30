import Container from '@/components/Container';
import SectionDivider from '@/components/SectionDivider';

import InputLabel from '@/components/Input/InputLabel';
import InputField from '@/components/Input/InputField';
import Button from '@/components/Button';

const SignUp = () => {
  return (
    <div>
      <SectionDivider size='lg'>
        <Container size='sm'>
          <div className='w-[350px] mx-auto'>
            <span className='font-bold text-3xl text-green-600 block text-center mb-10'>
              SuperMarket
            </span>
            <h1 className='font-bold text-4xl mb-5'>Register</h1>
            <form>
              <div className='mb-2'>
                <InputLabel htmlFor='fullName' title='Your name' />
                <InputField name='fullName' />
              </div>
              <div className='mb-2'>
                <InputLabel
                  htmlFor='email'
                  title='Email Address'
                  type='email'
                />
                <InputField name='email' />
              </div>
              <div className='mb-2'>
                <InputLabel htmlFor='password' title='Password' />
                <InputField name='password' type='password' />
              </div>
              <div className='mb-5'>
                <InputLabel
                  htmlFor='confirmPassword'
                  title='Re-enter password'
                />
                <InputField name='confirmPassword' type='password' />
              </div>
              <Button size='full'>Sign Up</Button>
            </form>
          </div>
        </Container>
      </SectionDivider>
    </div>
  );
};

export default SignUp;
