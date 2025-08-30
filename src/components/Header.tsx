import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className='bg-light-primary text-white'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        <div className='flex gap-1 items-center'>
          <img src={Logo} alt='logo' className='w-11 h-8' />
          <Link to='/' className='text-lg font-bold'>
            Каталог моделей
          </Link>
        </div>
        <nav className='space-x-4 text-sm'>
          <Link to='/'>Главная</Link>
          <Link to='/about'>О нас</Link>
        </nav>
      </div>
    </header>
  );
}
