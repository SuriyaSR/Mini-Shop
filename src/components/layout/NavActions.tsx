import { BookHeart, Moon, ShoppingCart, Sun, User } from "lucide-react";
import { Button } from "../ui/button";
import { useDarkMode } from "@/hooks/useDarkMode";

interface NavActionProps {
    orientation?: "horizontal" | "vertical";
    className?: string;
}

const NavActions = ({orientation = "horizontal", className=""}: NavActionProps) => {
    const isVertical = orientation === "vertical";
    const {isDark, toggleMode} = useDarkMode();

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
        <Button onClick={toggleMode}
            className="">
            {isDark ? <Sun className="w-5 h-5 text-yellow-300"/> : <Moon className="w-5 h-5"/>}
        </Button>
    </div>
  )
}

export default NavActions
