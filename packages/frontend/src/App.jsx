import AppRouter from './routes';
import { AuthProvider } from './contexts/auth/authContext';

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
};

export default App;
