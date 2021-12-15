import InputLabel from '@/components/Input/InputLabel';
import Button from '@/components/Button';
import EditField from '../../../../components/Input/EditField';
import { useSelector } from 'react-redux';

import { useForm } from '../../../../hooks/useForm';
import { validation } from '../../../../services/formServices/fieldValidation';
import { updateUser } from '../../../../features/auth/actions';

const UserInfo = () => {
  const { isLoading, isSubmitted, setIsLoading, validate } = useForm();
  const { user } = useSelector(state => state.auth);

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);

    const { fieldObj, isFormValid } = validate(event.currentTarget);

    if (isFormValid) {
      updateUser(fieldObj).finally(() => setIsLoading(false));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-5'>
          <h2 className='font-bold text-2xl mb-4'>Personal Information</h2>
          <div className='flex gap-5'>
            <div>
              <InputLabel title='Full Name' htmlFor='fullName' />
              <EditField
                name='fullName'
                validation={validation.fullName}
                isSubmitted={isSubmitted}
                isLoading={isLoading}
                value={user.fullName}
              />
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <h2 className='font-bold text-2xl mb-4'>Account Information</h2>
          <div className='flex gap-5 items-end'>
            <div>
              <InputLabel title='Email Address' htmlFor='email' />
              <EditField
                name='email'
                type='email'
                validation={validation.email}
                isSubmitted={isSubmitted}
                isLoading={isLoading}
                value={user.email}
              />
            </div>
          </div>
        </div>
        <Button type='submit' disabled={isLoading} isLoading={isLoading}>
          Save
        </Button>
      </form>
    </div>
  );
};

export default UserInfo;
