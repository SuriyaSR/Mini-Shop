import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { Button } from "@/components/ui/button"
import { addToCart, decreaseQnty, increaseQnty, selectCartItems } from "@/features/cart/cartSlice";
import { selectWishlistItems, toggleWishlist } from "@/features/wishlist/wishlistSlice";
import type { Product } from "@/types/product";
import { Heart, HeartOff, MinusIcon, PlusIcon } from "lucide-react";

const ProductActions = ({product}:{product: Product}) => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(selectCartItems);
  const wishlistItems = useAppSelector(selectWishlistItems);

  const inCart = cartItems.find(item => item.id === product.id);
  const inWishlist = wishlistItems.find(item => item.id === product.id);
  
  return (
    <div className="flex gap-3 mt-4">
      
      {inCart ? (
      <div className="flex items-center justify-between 
        rounded-lg border min-w-[180px]
        border-gray-300 bg-amber-300
        dark:bg-amber-400 dark:border-gray-600 
        hover:bg-amber-300 dark:hover:bg-amber-500">

        <Button 
          onClick={() => dispatch(decreaseQnty(product.id))} 
          variant="ghost"
          size="icon"
          className="text-gray-700 dark:text-gray-200 hover:bg-transparent"
        >
          <MinusIcon className="size-4" />
        </Button>

        <span className="font-semibold text-gray-900 dark:text-gray-100">
          {inCart.quantity}
        </span>

        <Button 
          onClick={() => dispatch(increaseQnty(product.id))} 
          variant="ghost"
          size="icon"
          className="text-gray-700 dark:text-gray-200 hover:bg-transparent"
        >
          <PlusIcon className="size-4" />
        </Button>

      </div>
    ) : (
      <Button 
        className="cursor-pointer py-3 rounded-lg font-semibold
          bg-amber-500 text-white min-w-[180px]
          hover:bg-amber-600
          dark:bg-amber-400 dark:hover:bg-amber-500"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </Button>
    )}

      
        <Button
          onClick={() => dispatch(toggleWishlist(product))}
          className="py-3 rounded-lg font-medium
          bg-rose-400 text-white min-w-[200px]
          hover:bg-rose-600 cursor-pointer
          dark:bg-rose-400 dark:hover:bg-rose-500"
        >
         {!inWishlist ? (
            <span className="flex items-center gap-2">
              Add to Wishlist <Heart className="size-4" />
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Remove from Wishlist <HeartOff className="size-4" />
            </span>
          )}
        </Button>
      
    </div>  
  )
}

export default ProductActions
