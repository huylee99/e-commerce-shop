import { useEffect } from 'react';

const useClickOutside = (ref, cb) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  });
};

export { useClickOutside };
