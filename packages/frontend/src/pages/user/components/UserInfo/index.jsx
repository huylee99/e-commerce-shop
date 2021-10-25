const UserInfo = () => {
  return (
    <div>
      <div className='mb-5'>
        <h2 className='font-bold text-2xl mb-4'>Personal Information</h2>
        <div className='flex gap-5'>
          <div>
            <label
              htmlFor='firstName'
              className='inline-block mb-2 font-semibold text-gray-500'
            >
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              className='px-2 py-1 block focus:outline-none border border-gray-300 rounded-md font-semibold w-full'
            />
          </div>
          <div className='max-w-xl'>
            <label
              htmlFor='lastName'
              className='inline-block mb-2 font-semibold text-gray-500'
            >
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              className='px-2 py-1 block focus:outline-none border border-gray-300 rounded-md w-full'
            />
          </div>
        </div>
      </div>
      <div className='mb-5'>
        <h2 className='font-bold text-2xl mb-4'>Account Information</h2>
        <div className='flex gap-5 items-end'>
          <div>
            <label
              htmlFor='email'
              className='inline-block mb-2 font-semibold text-gray-500'
            >
              Email Address
            </label>
            <input
              type='email'
              name='email'
              className='px-2 py-1 block focus:outline-none border border-gray-300 rounded-md'
            />
          </div>
          <div>
            <label
              htmlFor='phone'
              className='inline-block mb-2 font-semibold text-gray-500'
            >
              Phone
            </label>
            <input
              type='text'
              name='phone'
              className='px-2 py-1 block focus:outline-none border border-gray-300 rounded-md'
            />
          </div>
        </div>
      </div>
      <button className='bg-blue-500 border border-blue-500 py-1 px-4 font-bold text-white cursor-pointer rounded-md hover:bg-transparent hover:text-blue-500'>
        Save
      </button>
    </div>
  );
};

export default UserInfo;
