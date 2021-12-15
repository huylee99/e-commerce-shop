import { toast } from 'react-toastify';

const toastifyConfig = {
  position: 'top-center',
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
};

const notify = (message, type) => {
  switch (type) {
    case 'error': {
      return toast.error(message, toastifyConfig);
    }
    case 'success': {
      return toast.success(message, toastifyConfig);
    }
    default: {
      return toast(message, toastifyConfig);
    }
  }
};

export { notify };
