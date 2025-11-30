import { Button } from "@/components/ui/button"
import type { Product } from "@/types/product"

interface ProductActionProps {
  product: Product
}

const ProductActions: React.FC<ProductActionProps> = ({product}) => {
  return (
    <div className="flex gap-3 mt-4">
      <Button className="cursor-pointer">Add to Cart</Button>
      <Button variant="outline" className="cursor-pointer">Add to Wishlist</Button>
    </div>
  )
}

export default ProductActions
