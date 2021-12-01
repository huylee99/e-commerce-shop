import CartItem from '../CartItem';

const Confirmation = ({ cartState }) => {
  const { cart } = cartState;

  return (
    <div>
      <h2 className='font-bold text-2xl mb-4'>Your order</h2>
      <div className='flex flex-col gap-4 max-h-[450px] overflow-y-scroll pr-5 list-scroll'>
        {cart &&
          cart.length !== 0 &&
          cart.map(({ product, quantity }) => (
            <CartItem product={product} quantity={quantity} key={product._id} />
          ))}
      </div>
    </div>
  );
};

export default Confirmation;
