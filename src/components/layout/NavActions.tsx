import { Heart, Moon, ShoppingCart, Sun, User } from "lucide-react";
import { Button } from "../ui/button";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useAppSelector } from "@/app/hooks";
import { selectCartCount } from "@/features/cart/cartSlice";
import { selectWishlistCount } from "@/features/wishlist/wishlistSlice";

interface NavActionProps {
    orientation?: "horizontal" | "vertical";
    className?: string;
}

const NavActions = ({orientation = "horizontal", className=""}: NavActionProps) => {
    const isVertical = orientation === "vertical";
    const {isDark, toggleMode} = useDarkMode();

    const cartCount = useAppSelector(selectCartCount);
    const wishlistCount = useAppSelector(selectWishlistCount);

  return (
    <div className={`navbar-icons flex items-center justify-between gap-1 text-sm
        ${isVertical ? "" : ""}
        ${className}
        `}>
        <Button variant="outline">
            <ShoppingCart className="w-5 h-5 "/>
           {/* Badge */}
            {cartCount > 0 && (
             <span className="text-red-400 dark:text-red-500">
                {cartCount}
            </span>
            )}
            {isVertical && <span>Cart</span>}
        </Button>
        <Button variant="outline" >
            <Heart className="w-5 h-5"/>
            {wishlistCount > 0 && (
            <span className="text-red-400 dark:text-red-500">
                {wishlistCount}
            </span>
            )}
            {isVertical && <span>Wishlist</span>}
        </Button>
        <Button variant="outline" >
            <User className="w-5 h-5"/>
            {isVertical && <span>Account</span>}
        </Button>
        <Button onClick={toggleMode}
            variant="outline">
            {isDark ? <Sun className="w-5 h-5 text-yellow-300"/> : <Moon className="w-5 h-5"/>}
        </Button>
    </div>
  )
}

export default NavActions
