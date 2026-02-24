import { useState } from 'react';
import ProductGrid from '../../components/product/ProductGrid';
import CartSidebar from '../../components/layout/CartSideBar';
import Sidebar from '../../components/layout/SideBar';
import Header from '../../components/layout/Header';
import { Category } from '../../types/product.type';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>('Meals');

  const [cartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenCart={() => setCartOpen(true)} />

      <div className="flex flex-1">
        {/* Categories always on left (even mobile) */}
        <div className="w-40 md:w-60">
          <Sidebar
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {/* Products */}
        <div className="flex-1 p-4">
          <ProductGrid category={selectedCategory} />
        </div>

        {/* Cart */}
        <CartSidebar
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        />
      </div>
    </div>
  );
}