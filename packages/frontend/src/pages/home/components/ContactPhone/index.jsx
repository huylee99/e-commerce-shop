import { PhoneIcon } from '@heroicons/react/outline';

const ContactPhone = () => {
  return (
    <div className='flex items-center'>
      <div className='relative w-16 h-16 leading-[64px] bg-primary text-primary bg-opacity-25 rounded-full text-center mr-5'>
        <PhoneIcon className='w-8 inline-block' />
      </div>
      <div>
        <span className='block font-bold text-sm uppercase'>Call us free</span>
        <span className='block font-semibold text-primary text-xl'>
          (503) - 444 - 8888
        </span>
      </div>
    </div>
  );
};

export default ContactPhone;
