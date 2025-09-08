import { Card } from './Card';
import data from '../data/models.json';

export const CardList = () => {
  return (
    <div className='grid grid-cols-2 gap-5 mt-10 mb-8 md:grid-cols-4 overflow-auto'>
      {data.map((model) => (
        <Card key={model.id} model={model} />
      ))}
    </div>
  );
};
