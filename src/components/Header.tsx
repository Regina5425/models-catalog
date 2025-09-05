import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import LogoDark from '../assets/logo-dark.svg';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <header className='bg-dark-tabbar fixed left-0 top-0 w-full dark:bg-light-tabbar'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        <div className='flex gap-1 items-center'>
          <img src={isDark ? LogoDark : Logo} alt='logo' className='w-11 h-8' />
          <Link
            to='/'
            className='text-lg text-dark-primary font-bold hover:text-light-accent transition-all ease-in-out duration-200 dark:text-light-primary'
          >
            Каталог моделей
          </Link>
        </div>
        <nav className='flex gap-3 justify-between items-center'>
          <button onClick={toggleTheme}>{isDark ? '☀️' : '🌙'}</button>
          <Link
            to='/'
            className=' hidden md:block text-dark-primary hover:text-light-accent transition-all ease-in-out duration-200 dark:text-light-primary'
          >
            Главная
          </Link>
          <Link
            to='/about'
            className='text-dark-primary hover:text-light-accent transition-all ease-in-out duration-200 dark:text-light-primary'
          >
            О нас
          </Link>
        </nav>
      </div>
    </header>
  );
}
