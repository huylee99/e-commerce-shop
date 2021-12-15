import PropTypes from 'prop-types';
import { useState } from 'react';

import InputLabel from '@/components/Input/InputLabel';
import InputField from '@/components/Input/InputField';
import Button from '@/components/Button';

import { validation } from '../../../../services/formServices/fieldValidation';
import { formValidation } from '../../../../services/formServices/formValidation';

import {
  updateShippingInfo,
  addShippingInfo,
} from '../../../../features/auth/actions';

const EditForm = ({ data, addressId, setShow }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const fieldObj = Object.fromEntries(formData.entries());

    const isFormValid = Object.keys(fieldObj).every(key =>
      formValidation(fieldObj, key)
    );

    setIsSubmitted(true);

    if (isFormValid) {
      if (addressId) {
        updateShippingInfo(addressId, fieldObj).finally(() => {
          setIsLoading(false);
          setShow(false);
        });
      } else {
        addShippingInfo(fieldObj).finally(() => {
          setIsLoading(false);
          setShow(false);
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
              <InputField
                name='fullName'
                value={data.fullName}
                validation={validation.fullName}
                isSubmitted={isSubmitted}
              />
            </div>
            <div>
              <InputLabel htmlFor='phone' title='Phone number' />
              <InputField
                name='phone'
                value={data.phone}
                validation={validation.phone}
                isSubmitted={isSubmitted}
              />
            </div>
          </div>

          <div>
            <InputLabel htmlFor='address' title='Home address' />
            <InputField
              name='address'
              value={data.address}
              validation={validation.address}
              isSubmitted={isSubmitted}
            />
          </div>
        </div>
        {isLoading ? '...Updating' : ''}
        <Button type='submit'>Save</Button>
      </form>
    </div>
  );
};

EditForm.propTypes = {
  address: PropTypes.object,
};

export default EditForm;
