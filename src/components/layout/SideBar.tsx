import { Button } from '@mui/material';
import { Category } from '../../types/product.type';

interface Props {
  selected: Category;
  onSelect: (category: Category) => void;
}

const categories: Category[] = [
  'Meals',
  'Juices',
  'Burgers',
  'Pizza',
  'Cakes',
];

export default function Sidebar({ selected, onSelect }: Props) {
  return (
    <div className="h-full w-40! md:w-60! bg-gray-800! text-white! p-4">
      {categories.map(cat => (
        <Button
          key={cat}
          className={`block! w-full! text-left! p-2! cursor-pointer! text-white! rounded! mb-2! ${
            selected === cat ? 'bg-gray-600!' : ''
          }`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </Button>
      ))}
    </div>
  );
}