import { Button } from "@/components/ui/button"

const ProductActions = () => {
  return (
    <div className="flex gap-3 mt-4">
      <Button className="cursor-pointer">Add to Cart</Button>
      <Button variant="outline" className="cursor-pointer">Add to Wishlist</Button>
    </div>
  )
}

export default ProductActions
