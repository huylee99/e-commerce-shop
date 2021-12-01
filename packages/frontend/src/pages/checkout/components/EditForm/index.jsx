import PropTypes from 'prop-types';
import { useState } from 'react';

import InputLabel from '@/components/Input/InputLabel';
import InputField from '@/components/Input/InputField';
import Button from '@/components/Button';

import { updateShippingInfo } from '../../../../features/auth/actions';

const EditForm = ({ address, addressId, setShow }) => {
  const [information, setInformation] = useState(address);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = event => {
    setInformation(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = () => {
    setIsLoading(true);
    updateShippingInfo(addressId, information).finally(() => {
      setIsLoading(false);
      setShow(false);
    });
  };

  return (
    <div>
      <div className='mb-5'>
        <div className='flex items-start gap-5 mb-5'>
          <div>
            <InputLabel htmlFor='name' title='Name' />
            <InputField
              name='name'
              value={information.name}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <InputLabel htmlFor='phone' title='Phone number' />
            <InputField
              name='phone'
              value={information.phone}
              onChange={onChangeHandler}
            />
          </div>
        </div>

        <div>
          <InputLabel htmlFor='address' title='Home address' />
          <InputField
            name='address'
            value={information.address}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      {isLoading ? '...Updating' : ''}
      <Button onClick={onSubmitHandler}>Save</Button>
    </div>
  );
};

EditForm.propTypes = {
  address: PropTypes.object,
};

export default EditForm;
