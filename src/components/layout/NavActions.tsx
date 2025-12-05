import { BookHeart, ShoppingCart, User } from "lucide-react";
import { Button } from "../ui/button";

interface NavActionProps {
    orientation?: "horizontal" | "vertical";
    className?: string;
}

const NavActions = ({orientation = "horizontal", className=""}: NavActionProps) => {
    const isVertical = orientation === "vertical";

  return (
    <div className={`flex items-center justify-between gap-1 text-sm
        ${isVertical ? "" : ""}
        ${className}
        `}>
        <Button>
            <ShoppingCart className="w-5 h-5"/>
            {isVertical && <span>Cart</span>}
        </Button>
        <Button>
            <BookHeart className="w-5 h-5"/>
            {isVertical && <span>Wishlist</span>}
        </Button>
        <Button>
            <User className="w-5 h-5"/>
            {isVertical && <span>Account</span>}
        </Button>
    </div>
  )
}

export default NavActions
