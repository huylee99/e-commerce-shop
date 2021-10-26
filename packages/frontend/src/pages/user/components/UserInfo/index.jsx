import InputLabel from '@/components/Input/InputLabel';
import InputField from '@/components/Input/InputField';
import Button from '@/components/Button';

const UserInfo = () => {
  return (
    <div>
      <div className='mb-5'>
        <h2 className='font-bold text-2xl mb-4'>Personal Information</h2>
        <div className='flex gap-5'>
          <div>
            <InputLabel title='First Name' htmlFor='firstName' />
            <InputField name='firstName' />
          </div>
          <div>
            <InputLabel title='Last Name' htmlFor='lastName' />
            <InputField name='lastName' />
          </div>
        </div>
      </div>
      <div className='mb-5'>
        <h2 className='font-bold text-2xl mb-4'>Account Information</h2>
        <div className='flex gap-5 items-end'>
          <div>
            <InputLabel title='Email Address' htmlFor='email' />
            <InputField name='email' type='email' />
          </div>
          <div>
            <InputLabel title='Phone number' htmlFor='phone' />
            <InputField name='phone' />
          </div>
        </div>
      </div>
      <Button>Save</Button>
    </div>
  );
};

export default UserInfo;
