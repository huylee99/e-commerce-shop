import PropTypes from 'prop-types';

import InputLabel from '@/components/Input/InputLabel';
import EditField from '@/components/Input/EditField';
import Button from '@/components/Button';

import { validation } from '../../../../services/formServices/fieldValidation';
import { updateAddress, addAddress } from '../../../../features/user/actions';
import { useForm } from '../../../../hooks/useForm';

const EditForm = ({ data, addressId, setShow }) => {
  const { isLoading, isSubmitted, validate, setIsLoading } = useForm();

  const handleSubmit = event => {
    event.preventDefault();

    const { fieldObj, isFormValid } = validate(event.currentTarget);

    if (isFormValid) {
      if (addressId) {
        updateAddress(addressId, fieldObj)
          .then(() => {
            setShow(false);
          })
          .catch(() => {
            setIsLoading(false);
          });
      } else {
        addAddress(fieldObj)
          .then(() => {
            setShow(false);
          })
          .catch(() => {
            setIsLoading(false);
          });
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-5'>
          <div className='flex items-start gap-5 mb-5'>
            <div>
              <InputLabel htmlFor='fullName' title='Full name' />
              <EditField
                name='fullName'
                value={data.fullName}
                validation={validation.fullName}
                isSubmitted={isSubmitted}
                isLoading={isLoading}
              />
            </div>
            <div>
              <InputLabel htmlFor='phoneNumber' title='Phone number' />
              <EditField
                name='phoneNumber'
                value={data.phoneNumber}
                validation={validation.phoneNumber}
                isSubmitted={isSubmitted}
                isLoading={isLoading}
              />
            </div>
          </div>

          <div className='mb-5'>
            <InputLabel htmlFor='address' title='Home address' />
            <EditField
              name='address'
              value={data.address}
              validation={validation.address}
              isSubmitted={isSubmitted}
              isLoading={isLoading}
            />
          </div>
          <div className='flex items-start gap-5 mb-5'>
            <div>
              <InputLabel htmlFor='city' title='City' />
              <EditField
                name='city'
                value={data.city}
                validation={validation.city}
                isSubmitted={isSubmitted}
                isLoading={isLoading}
              />
            </div>
            <div>
              <InputLabel htmlFor='state' title='State' />
              <EditField
                name='state'
                value={data.state}
                validation={validation.state}
                isSubmitted={isSubmitted}
                isLoading={isLoading}
              />
            </div>
            <div>
              <InputLabel htmlFor='zipCode' title='Zip code' />
              <EditField
                name='zipCode'
                value={data.zipCode}
                validation={validation.zipCode}
                isSubmitted={isSubmitted}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
        {isLoading ? '...Updating' : ''}
        <Button type='submit' isLoading={isLoading}>
          Save
        </Button>
      </form>
    </div>
  );
};

EditForm.propTypes = {
  address: PropTypes.object,
};

export default EditForm;
