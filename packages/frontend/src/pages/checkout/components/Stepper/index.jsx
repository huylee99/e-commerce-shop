import PropTypes from 'prop-types';

import { CheckIcon } from '@heroicons/react/solid';
import { ChevronRightIcon } from '@heroicons/react/outline';

const Stepper = ({ steps }) => {
  const statusRender = (status, index) => {
    switch (status) {
      case 'PENDING':
        return (
          <div className='w-10 h-10 bg-gray-100 leading-10 text-center rounded-full mr-5'>
            <span className='text-gray-300 inline-block'>{index}</span>
          </div>
        );
      case 'IN_PROGRESS':
        return (
          <div className='w-10 h-10 bg-blue-600 leading-10 text-center rounded-full mr-5'>
            <span className='text-white inline-block'>{index}</span>
          </div>
        );
      case 'DONE':
        return (
          <div className='w-10 h-10 bg-blue-600 leading-10 text-center rounded-full mr-5'>
            <CheckIcon className='w-5 text-white inline-block' />
          </div>
        );
    }
  };

  return (
    <div className='flex items-center justify-center'>
      {steps.map((step, index) => (
        <>
          <div className='flex items-center'>
            {statusRender(step.status, ++index)}
            <span>{step.title}</span>
          </div>
          {index === 3 ? null : <ChevronRightIcon className='mx-10 w-6' />}
        </>
      ))}
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.any,
};

export default Stepper;
