import { useState } from 'react';

import TopBar from '@/components/TopBar';
import Container from '@/components/Container';
import SectionDivider from '@/components/SectionDivider';

import Stepper from './components/Stepper';
import Shipping from './components/Shipping';
import Confirmation from './components/Confirmation';
import Summary from './components/Summary';
import Payment from './components/Payment';

const STEPS = [
  {
    id: 1,
    title: 'Shipping',
    status: 'IN_PROGRESS',
  },
  {
    id: 2,
    title: 'Payment',
    status: 'PENDING',
  },
  {
    id: 3,
    title: 'Confirmation',
    status: 'PENDING',
  },
];

const Checkout = () => {
  const [step, setStep] = useState(0);
  const [stepsState, setStepsState] = useState([...STEPS]);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Shipping />;
      case 1:
        return <Payment />;
      case 2:
        return <Confirmation />;
      default:
        return 'Error';
    }
  };

  const handleNext = () => {
    setStepsState(prevState => {
      prevState[step].status = 'DONE';
      prevState[step + 1].status = 'IN_PROGRESS';

      return [...prevState];
    });
    setStep(prevStep => ++prevStep);
  };

  const handlePrevious = () => {
    setStepsState(prevState => {
      prevState[step].status = 'PENDING';
      prevState[step - 1].status = 'IN_PROGRESS';

      return [...prevState];
    });

    setStep(prevStep => --prevStep);
  };

  return (
    <div className='wrapper'>
      <TopBar containerSize='md' />
      <Container size='sm'>
        <>
          <SectionDivider size='sm'>
            <h2 className='text-center text-4xl font-bold'>Checkout</h2>
          </SectionDivider>
          <SectionDivider size='sm'>
            <Stepper steps={stepsState} />
          </SectionDivider>
          <SectionDivider size='sm'>
            <div className='flex items-start gap-10'>
              <div className='max-w-[70%] w-[70%]'>
                <div className='mb-10 h-[500px]'>{renderStep()}</div>
                <div className='flex justify-between items-center'>
                  {step === 0 ? null : (
                    <button
                      className='px-6 text-sm py-2 border border-gray-300 rounded-md font-semibold hover:text-blue-600 transition-all'
                      onClick={handlePrevious}
                    >
                      Back to {STEPS[step - 1].title}
                    </button>
                  )}
                  {step === 2 ? null : (
                    <button
                      className='px-6 text-sm py-2 border border-blue-600 bg-blue-600 rounded-md text-white font-semibold hover:text-blue-600 hover:bg-transparent transition-all ml-auto'
                      onClick={handleNext}
                    >
                      Move to {STEPS[step + 1].title}
                    </button>
                  )}
                </div>
              </div>
              <div className='max-w-[30%] w-[30%]'>
                <Summary />
                {step === 2 ? (
                  <button className='w-full bg-blue-600 py-2 font-semibold rounded-md text-white'>
                    Place Order and Pay
                  </button>
                ) : null}
              </div>
            </div>
          </SectionDivider>
        </>
      </Container>
    </div>
  );
};

export default Checkout;
