import InputSelect from '@/components/Input/InputSelect';

const ADDRESSES = [
  {
    id: 1,
    title: 'HOME',
    address: '16190 SW 108th AVE APT 210, Tigard, OR 97224',
  },
  {
    id: 2,
    title: 'HOME-1',
    address: '16190 SW 108th AVE APT 210, Tigard, OR 97223',
  },
  {
    id: 3,
    title: 'HOME-2',
    address: '16190 SW 108th AVE APT 210, Tigard, OR 97222',
  },
];

const Shipping = () => {
  const handleChange = event => {
    console.log(ADDRESSES[event.target.value]);
  };

  return (
    <div>
      <h2 className='font-bold text-2xl mb-4'>Choose shipping address</h2>
      <div>
        {ADDRESSES.map((user, index) => (
          <InputSelect
            key={user.id}
            name='address'
            id={`address-${user.id}`}
            value={index}
            onChange={handleChange}
            className='mb-2 last:mb-0'
          >
            <div className='rounded-lg flex items-center justify-between'>
              <h4 className='font-bold text-base uppercase'>{user.title}</h4>
              <span className='block text-sm text-gray-500 font-semibold'>
                {user.address}
              </span>
            </div>
          </InputSelect>
        ))}
      </div>
    </div>
  );
};

export default Shipping;
