export const Footer = () => {
  return (
    <footer className='text-sm bg-dark-tabbar text-dark-primary h-[44px] flex items-center justify-center fixed left-0 bottom-0 w-full'>
      © {new Date().getFullYear()} Models In Motion
    </footer>
  );
};
