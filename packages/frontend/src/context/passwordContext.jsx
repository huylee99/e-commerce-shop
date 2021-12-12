import { useContext, createContext, useState } from 'react';

const PasswordContext = createContext();
const SetPasswordContext = createContext();

const PasswordProvider = ({ children }) => {
  const [value, setValue] = useState('');

  return (
    <PasswordContext.Provider value={value}>
      <SetPasswordContext.Provider value={setValue}>
        {children}
      </SetPasswordContext.Provider>
    </PasswordContext.Provider>
  );
};

const usePassword = () => {
  const context = useContext(PasswordContext);

  if (context === null) {
    throw new Error(
      'usePassword must be used in a descendant of PasswordProvider'
    );
  }

  return context;
};

const useSetPassword = () => {
  const context = useContext(SetPasswordContext);

  if (context === null) {
    throw new Error(
      'useSetPassword must be used in a descendant of PasswordProvider'
    );
  }

  return context;
};

export { PasswordProvider, usePassword, useSetPassword };
