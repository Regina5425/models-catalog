import { Link } from 'react-router-dom';

type Props = {
  model: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
};

export const Card = ({ model }: Props) => {
  const { id, image, name, price } = model;
  return (
    <div className='flex flex-col gap-2 p-[12px] bg-light-card rounded-[20px] justify-between dark:bg-dark-card'>
      <img src={image} alt='model' className='w-full h-[100px] object-cover rounded-[20px] md:h-[200px]' />
      <div className='flex flex-col gap-[3px] justify-between'>
        <p className='text-light-secondary text-xs font-semibold p-0 m-0 mb-1 h-[50px] line-clamp-3 md:line-clamp-none md:text-sm dark:text-dark-secondary'>
          {name}
        </p>
        {price ? (
          <p className='text-light-primary text-lg font-bold p-0 m-0 dark:text-dark-primary'>{`${price.toLocaleString()} ₽`}</p>
        ) : null}
      </div>
      <Link
        to={`/models/${id}`}
        className='flex justify-center items-center py-2 px-8 text-light-white text-sm bg-light-accent rounded-[16px] md:h-[42px]'
      >
        Посмотреть
      </Link>
    </div>
  );
};
