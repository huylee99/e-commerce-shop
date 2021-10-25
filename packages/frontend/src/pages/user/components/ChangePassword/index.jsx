const ChangePassword = () => {
  return (
    <div>
      <div className='mb-5'>
        <h2 className='font-bold text-2xl mb-4'>Change Password</h2>
        <div className='max-w-xs'>
          <div className='mb-4'>
            <label
              htmlFor='currentPassword'
              className='inline-block mb-2 font-semibold text-gray-500'
            >
              Current Password
            </label>
            <input
              type='text'
              name='currentPassword'
              className='px-2 py-1 block focus:outline-none border border-gray-300 rounded-md font-semibold w-full'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='newPassword'
              className='inline-block mb-2 font-semibold text-gray-500'
            >
              New Password
            </label>
            <input
              type='text'
              name='newPassword'
              className='px-2 py-1 block focus:outline-none border border-gray-300 rounded-md w-full'
            />
          </div>
          <div>
            <label
              htmlFor='passwordConfirm'
              className='inline-block mb-2 font-semibold text-gray-500'
            >
              Confirm Password
            </label>
            <input
              type='text'
              name='passwordConfirm'
              className='px-2 py-1 block focus:outline-none border border-gray-300 rounded-md w-full'
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

export default ChangePassword;
