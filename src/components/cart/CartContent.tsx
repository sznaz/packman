import { IconButton, Divider } from '@mui/material';
import deleteImage from '../../assets/icons/delete.svg';
import addIcon from '../../assets/icons/add.svg';
import removeIcon from '../../assets/icons/remove.svg';
import { useCart } from '../../context/cart/useCart';

export default function CartContent() {
  const {
    cart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold mb-4">Your Bag</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-sm">No items added.</p>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-4">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 object-cover rounded-md"
              />

              <div className="flex-1">
                <p className="font-medium text-sm">{item.name}</p>

                <div className="flex items-center gap-2 mt-1">
                  <IconButton
                    size="small"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    <img src={removeIcon} alt="remove" />
                  </IconButton>

                  <span className="text-sm font-medium">
                    {item.quantity}
                  </span>

                  <IconButton
                    size="small"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    <img src={addIcon} alt="add" />
                  </IconButton>
                </div>

                <p className="text-xs text-gray-500 mt-1">
                  ₹{item.price} each
                </p>
              </div>

              <IconButton
                size="small"
                onClick={() => removeFromCart(item.id)}
              >
                <img
                  src={deleteImage}
                  alt="delete"
                  width={18}
                  height={18}
                />
              </IconButton>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <>
          <Divider className="my-3" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </>
      )}
    </div>
  );
}