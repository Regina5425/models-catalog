import Whatsapp from '../assets/whatsapp.jpg';
import Avito from '../assets/avito.png';

export const Footer = () => {
  return (
    <footer className='text-sm bg-dark-tabbar text-dark-primary h-[60px] py-2 flex items-center justify-center gap-5 fixed left-0 bottom-0 w-full'>
      <a href='https://wa.me/79625583777' target='_blank'>
        <img src={Whatsapp} alt='Whatsapp' className='inline-block rounded-[8px] w-10 h-10' />
      </a>
      <a href='https://www.avito.ru/user/0b2821af26448af89e56e06105c73455/profile?src=sharing' target='_blank'>
        <img src={Avito} alt='Avito' className='inline-block rounded-[8px] w-10 h-10' />
      </a>
    </footer>
  );
};
