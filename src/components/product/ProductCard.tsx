import { Card, CardContent, Button } from '@mui/material';
import { Product } from '../../types/product.type';
import { useCart } from '../../context/cart/useCart';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <Card className="shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />

      <CardContent>
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">₹{product.price}</p>

        <Button
          variant="contained"
          fullWidth
          onClick={() => addToCart(product)}
        >
          Add to Bag
        </Button>
      </CardContent>
    </Card>
  );
}