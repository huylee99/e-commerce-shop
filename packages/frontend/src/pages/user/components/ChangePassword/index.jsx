import InputLabel from '@/components/Input/InputLabel';
import InputField from '@/components/Input/InputField';
import Button from '@/components/Button';

const ChangePassword = () => {
  return (
    <div>
      <div className='mb-5'>
        <h2 className='font-bold text-2xl mb-4'>Change Password</h2>
        <div className='max-w-xs'>
          <div className='mb-4'>
            <InputLabel title='Current Password' htmlFor='currentPassword' />
            <InputField name='currentPassword' />
          </div>
          <div className='mb-4'>
            <InputLabel title='New Password' htmlFor='newPassword' />
            <InputField name='newPassword' />
          </div>
          <div>
            <InputLabel title='Password Confirm' htmlFor='passwordConfirm' />
            <InputField name='passwordConfirm' />
          </div>
        </div>
      </div>
      <Button>Save</Button>
    </div>
  );
};

export default ChangePassword;
