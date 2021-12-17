import { CashIcon, CreditCardIcon } from '@heroicons/react/outline';
import InputSelect from '@/components/Input/InputSelect';

import { useCheckout } from '../../context/checkoutContext';
import types from '../../context/types';

const Payment = () => {
  const [{ paymentMethod }, dispatch] = useCheckout();

  const onChangeHandler = e => {
    dispatch({ type: types.PAYMENT_SELECT, paymentMethod: e.target.value });
  };

  return (
    <div className='h-full'>
      <h2 className='font-bold text-2xl mb-4'>Payment</h2>
      <div>
        <div className='inline-block mr-5'>
          <InputSelect
            name='payment'
            id='cash'
            value='cash'
            onChange={onChangeHandler}
            selectedId={paymentMethod}
          >
            <CashIcon className='inline-block align-middle w-5 mr-2' />
            <span className='inline-block align-middle font-semibold'>
              Pay by Cash
            </span>
          </InputSelect>
        </div>
        <div className='inline-block'>
          <InputSelect
            name='payment'
            id='card'
            value='card'
            onChange={onChangeHandler}
            selectedId={paymentMethod}
          >
            <CreditCardIcon className='inline-block align-middle w-5 mr-2' />
            <span className='inline-block align-middle font-semibold'>
              Pay by Card
            </span>
          </InputSelect>
        </div>
      </div>
    </div>
  );
};

export default Payment;
