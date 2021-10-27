import CartItem from '../CartItem';

const Confirmation = () => {
  return (
    <div>
      <h2 className='font-bold text-2xl mb-4'>Your order</h2>
      <div className='flex flex-col gap-4 max-h-[450px] overflow-y-scroll pr-5 list-scroll'>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default Confirmation;
