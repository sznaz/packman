import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Box,
} from "@mui/material";
import bagImage from "../../assets/icons/bag.svg";
import avatarImage from "../../assets/icons/avatar.svg";
import { useAuth } from "../../context/auth/useAuth";
import { useCart } from "../../context/cart/useCart";

interface Props {
  onOpenCart: () => void;
}

export default function Header({ onOpenCart }: Props) {
  const { cart } = useCart();
  const { user } = useAuth();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Safe initials extraction
  const getInitials = (name?: string): string | null => {
    if (!name || name.trim().length === 0) return null;

    const words = name.trim().split(" ");
    const first = words[0]?.[0] ?? "";
    const second = words[1]?.[0] ?? words[0]?.[1] ?? "";

    return (first + second).toUpperCase();
  };

  const initials = getInitials(user?.fullName);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#111827" }}>
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="font-bold">
          FoodHub
        </Typography>

        <Box className="flex items-center gap-3">
          {/* Bag icon only on small screens */}
          <div className="md:hidden">
            <IconButton color="inherit" onClick={onOpenCart}>
              <Badge badgeContent={totalItems} color="error">
                <img width={24} height={24} src={bagImage} alt="Bag" />
              </Badge>
            </IconButton>
          </div>

          {/* Profile Avatar */}
          <Avatar
            sx={{
              bgcolor: initials ? "#dc2626" : "transparent",
              width: 36,
              height: 36,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {initials ? (
              initials
            ) : (
              <img width={30} height={30} src={avatarImage} alt="avatar" />
            )}
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
