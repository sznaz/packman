import { PRODUCTS } from '../../data/products';
import { Category } from '../../types/product.type';
import ProductCard from './ProductCard';

interface Props {
  category: Category;
}

export default function ProductGrid({ category }: Props) {
  const filtered = PRODUCTS.filter(p => p.category === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filtered.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}