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
          <button
            onClick={toggleTheme}
            className='flex items-center gap-2 group'
            aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
          >
            <div className='relative w-12 h-6 bg-light-secondary rounded-full transition-colors duration-300'>
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white-60 rounded-full transition-transform duration-300 flex items-center justify-center shadow-md group-hover:scale-110 ${isDark ? 'translate-x-6' : 'translate-x-1'}`}
              >
                <span className='text-xs leading-none'>{isDark ? '🌙' : '🌞'}</span>
              </div>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
}
