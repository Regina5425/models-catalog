import type { ReactNode } from 'react';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 container mx-auto px-4 py-6'>{children}</main>
      <footer className='text-sm bg-light-primary text-light-white h-[44px] flex items-center justify-center'>
        © {new Date().getFullYear()} Models In Motion
      </footer>
    </div>
  );
}
