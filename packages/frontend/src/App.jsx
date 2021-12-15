import AppRouter from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <AppRouter />
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
