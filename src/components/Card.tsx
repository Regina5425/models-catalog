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
    <div className='flex flex-col gap-2 p-[12px] bg-light-card rounded-[20px] justify-center'>
      <img
        src={image}
        alt='model'
        className='w-full h-auto max-h-[100px] object-cover rounded-[20px] md:max-h-[200px] md:h-full'
      />
      <div className='flex flex-col gap-[4px] justify-start'>
        <p className='text-light-secondary text-sm font-semibold'>{name}</p>
        <p className='text-light-primary text-lg font-bold'>{`${price.toLocaleString()} ₽`}</p>
      </div>
      <Link
        to={`/models/${id}`}
        className='flex justify-center items-center py-2 px-8 text-light-white text-[16px] bg-light-accent rounded-[16px]'
      >
        Посмотреть
      </Link>
    </div>
  );
};
