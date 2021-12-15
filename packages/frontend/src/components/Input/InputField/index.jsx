import { useState } from 'react';

const InputField = ({
  type = 'text',
  name,
  placeholder,
  validation,
  isSubmitted,
  isLoading = false,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);
  const errorMessage = validation(inputValue);
  const displayError = (touched || isSubmitted) && errorMessage;

  return (
    <div>
      <input
        type={type}
        name={name}
        className='px-2 py-1 block focus:outline-none border border-gray-300 rounded-md font-semibold w-full disabled:bg-gray-100 disabled:pointer-events-none'
        onChange={event => setInputValue(event.target.value)}
        onBlur={() => setTouched(true)}
        placeholder={placeholder}
        autoComplete='off'
        disabled={isLoading}
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
