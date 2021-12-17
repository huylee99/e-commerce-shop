const ShippingInformation = ({ shippingInformation }) => {
  const { fullName, phoneNumber, address, city, state, zipCode } =
    shippingInformation;
  return (
    <div>
      <div className='bg-gray-100 text-lg px-4 py-2 font-bold rounded-md text-dark'>
        Shipping Information
      </div>
      <div className='px-6 py-4'>
        <div className='flex mb-4'>
          <div className='w-1/2'>
            <span className='font-bold'>Full Name: </span>
            <span>{fullName}</span>
          </div>
          <div className='w-1/2'>
            <span className='font-bold'>Phone Number: </span>
            <span>{phoneNumber}</span>
          </div>
        </div>
        <div>
          <span className='font-bold'>Shipping Address: </span>
          <span>{` ${address}, ${city}, ${state} - ${zipCode}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ShippingInformation;
