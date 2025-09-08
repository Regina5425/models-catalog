import { Link, useParams } from 'react-router-dom';
import ArrowLight from '../assets/arrow-back.svg';
import ArrowDark from '../assets/arrow-back-dark.svg';
import data from '../data/models.json';
import { useTheme } from '../hooks/useTheme';

export const Model = () => {
  const { id } = useParams();
  const { isDark } = useTheme();

  const model = data.find((model) => {
    const modelId = !isNaN(Number(id)) ? Number(id) : 0;

    return model.id === modelId;
  });

  return (
    <div className='flex flex-col items-center justify-between gap-5 mt-14 mb-11 xl:max-w-[500px]'>
      <div className='flex justify-between items-center h-[44px] w-full'>
        <Link to='/' className='md:hidden'>
          <img src={isDark ? ArrowDark : ArrowLight} alt='back' />
        </Link>
        <p className='text-light-primary text-lg font-bold dark:text-dark-primary'>{model?.name}</p>
      </div>
      <img className='rounded-[20px] w-full max-h-[300px]' src={model?.image} alt='model info' />
      <p className='text-light-primary text-xl leading-6 font-medium dark:text-dark-primary'>{model?.description}</p>
      <p className='text-light-accent text-2xl font-bold self-start dark:text-dark-accent'>{`${model?.price.toLocaleString()} ₽`}</p>
    </div>
  );
};
