import { Card } from './Card';
import data from '../data/models.json';
import { useEffect } from 'react';

export const CardList = () => {
  useEffect(() => {
    const storedScrollY = sessionStorage.getItem('scrollPosition');
    if (storedScrollY) {
      window.scrollTo(0, parseInt(storedScrollY));
    }

    let timeoutId: number;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        sessionStorage.setItem('scrollPosition', window.pageYOffset.toString());
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='h-full grid grid-cols-2 gap-5 mt-10 mb-12 md:grid-cols-4 overflow-auto'>
      {data.map((model) => (
        <Card key={model.id} model={model} />
      ))}
    </div>
  );
};
