import type { Product } from "@/types/product"
import ProductRating from "./ProductRating"

const ProductInfo= ({product}:{product: Product}) => {
  return (
    <div className="mt-6 space-y-3">
      <p className="text-xl font-semibold leading-tight">
        {product.title}
      </p>
      <ProductRating ratingValue={product.rating} />
      <p className="text-2xl font-bold">
        ${product.price}
      </p>
      <p className="text-base text-muted-foreground">
        {product.description}
      </p>
      <p className="text-sm">
        Availability :  {product.availabilityStatus}      
      </p>
    </div>
  )
}

export default ProductInfo
