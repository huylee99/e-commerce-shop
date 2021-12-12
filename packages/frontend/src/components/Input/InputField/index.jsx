import { useState } from 'react';

const InputField = ({
  type = 'text',
  name,
  placeholder,
  validation,
  isSubmitted,
}) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const errorMessage = validation(value);
  const displayError = (touched || isSubmitted) && errorMessage;

  return (
    <div>
      <input
        type={type}
        name={name}
        className='px-2 py-1 block focus:outline-none border border-gray-300 rounded-md font-semibold w-full'
        onChange={event => setValue(event.target.value)}
        onBlur={() => setTouched(true)}
        placeholder={placeholder}
        autoComplete='off'
      />
      {displayError ? (
        <div className='font-bold text-red-500 text-sm mt-1'>
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
};

export default InputField;
