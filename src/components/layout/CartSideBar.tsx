import { Drawer } from '@mui/material';
import CartContent from '../cart/CartContent';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartSidebar({ open, onClose }: Props) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block w-80 bg-gray-100 p-4 border-l">
        <CartContent />
      </div>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={onClose}>
        <div className="w-80 h-full p-4">
          <CartContent />
        </div>
      </Drawer>
    </>
  );
}