import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

// This values are the props in the UI

const style = { layout: 'vertical' };

// Custom component to wrap the PayPalButtons and handle currency changes
const PayButton = ({ showSpinner, amount, callback, isLoading }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ isPending }] = usePayPalScriptReducer();

  return (
    <>
      {showSpinner && isPending && <div className='spinner' />}
      <PayPalButtons
        style={style}
        disabled={isLoading}
        forceReRender={[amount]}
        fundingSource={'paypal'}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'USD',
                    value: amount,
                  },
                },
              ],
            })
            .then(orderId => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={async (data, actions) => {
          const response = await actions.order.capture();
          await callback();

          return response;
        }}
      />
    </>
  );
};

export default PayButton;
