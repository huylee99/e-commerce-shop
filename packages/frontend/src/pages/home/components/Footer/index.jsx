import SectionDivider from '@/components/SectionDivider';
import Container from '@/components/Container';

import ContactPhone from '../ContactPhone';

const MENUS = [
  {
    title: 'customer',
    lists: [
      {
        title: 'contact us',
      },
      {
        title: 'track your order',
      },
      {
        title: 'return policy',
      },
      {
        title: 'delivery information',
      },
    ],
  },
  {
    title: 'my account',
    lists: [
      {
        title: 'personal information',
      },
      {
        title: 'contact',
      },
      {
        title: 'shopping cart',
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <SectionDivider size='lg'>
        <Container size='lg'>
          <div className='flex items-stretch gap-20'>
            <div className='max-w-xs'>
              <div className='mb-5'>
                <ContactPhone />
              </div>

              <div className='mb-2'>
                <span className='font-bold'>
                  Address:{' '}
                  <span className='font-semibold text-gray-500'>
                    100 McEvoy St, Alexandria NSW 2015 Australia
                  </span>
                </span>
              </div>
              <div>
                <span className='font-bold'>Open Hours: </span>
                <span className='font-semibold text-gray-500 inline-block'>
                  Monday – Saturday: 8:00 am – 4:00pm Sunday: Close
                </span>
              </div>
            </div>

            {MENUS.map((menu, index) => (
              <div key={index}>
                <h4 className='mb-5 font-bold text-base uppercase tracking-wide'>
                  {menu.title}
                </h4>
                <ul>
                  {menu.lists.map((item, index) => (
                    <li
                      key={index}
                      className='capitalize mb-1 last:mb-0 font-semibold text-gray-500'
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </SectionDivider>
      <div className='border border-t-1'>
        <SectionDivider size='sm'>
          <Container size='lg'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-10 font-semibold text-gray-500'>
                <div>&copy; 2021 SuperMarket</div>
                <div>Privacy Policy</div>
                <div>Terms & Conditions</div>
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634938931/paymet-1.png_fregkx.webp'
                  alt='payments'
                />
              </div>
            </div>
          </Container>
        </SectionDivider>
      </div>
    </>
  );
};

export default Footer;
