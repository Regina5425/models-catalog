import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import LogoDark from '../assets/logo-dark.svg';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <header className='bg-dark-tabbar fixed left-0 top-0 w-full'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        <div className='flex gap-1 items-center'>
          <img src={isDark ? LogoDark : Logo} alt='logo' className='w-11 h-8' />
          <Link
            to='/'
            className='text-lg text-dark-primary font-bold hover:text-light-accent transition-all ease-in-out duration-200'
          >
            Каталог моделей
          </Link>
        </div>
        <nav className='flex gap-3 justify-between items-center'>
          <label className='inline-flex items-center cursor-pointer'>
            <input type='checkbox' value='' className='sr-only peer' onChange={toggleTheme} />
            <div className="relative w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-light-border after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-light-card after:border-light-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-light-accent dark:peer-checked:bg-dark-accent" />
          </label>
          <Link
            to='/'
            className=' hidden md:block text-dark-primary hover:text-light-accent transition-all ease-in-out duration-200'
          >
            Главная
          </Link>
          <Link
            to='/about'
            className='text-dark-primary hover:text-light-accent transition-all ease-in-out duration-200'
          >
            О нас
          </Link>
        </nav>
      </div>
    </header>
  );
}
