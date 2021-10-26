import { useState } from 'react';
import VerticalTab from '../VerticalTab';
import ChangePassword from '../ChangePassword';
import UserInfo from '../UserInfo';
import OrderHistory from '../OrderHistory';
import Coupons from '../Coupons';

const DashBoard = () => {
  const [tab, setTab] = useState(0);

  const renderTab = () => {
    switch (tab) {
      case 0:
        return <UserInfo />;
      case 1:
        return <ChangePassword />;
      case 2:
        return <OrderHistory />;
      case 3:
        return <Coupons />;
      default:
        return 'Error';
    }
  };

  return (
    <div className='flex items-start gap-5 w-full'>
      <div className='max-w-[25%] w-[25%]'>
        <VerticalTab setTab={setTab} />
      </div>
      <div className='max-w-[75%] w-[75%] border border-gray-200 rounded-md p-5 shadow-sm'>
        {renderTab()}
      </div>
    </div>
  );
};

export default DashBoard;
