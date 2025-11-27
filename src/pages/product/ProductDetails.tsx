import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import type { Product } from "@/types/product"
import { StarIcon } from "lucide-react"

export function ProductDetails({productData} : {productData: Product}) {

  return (
    <Card className="w-full py-3">
        <CardContent className="px-3">
          <CardTitle className="text-sm mb-1">
           <div className="rounded-md bg-gray-100 mb-2">            
              <img src={productData.thumbnail}  loading="lazy"
                  alt={productData.description} className="w-full h-48 object-contain" />
           
          </div>
          </CardTitle>
          <CardDescription className="text-xs mb-2 line-clamp-2">
            {productData.title}
          </CardDescription>
          <div className="flex items-center space-x-1 mb-2">
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
                key={star}
                className={`h-3 w-3 ${
                productData.rating >= star
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
            />
            ))}
        </div>

        <span className="text-xs text-muted-foreground">
            {productData.rating}
        </span>
        </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">${productData.price}</span>
            <Button size="sm" className="text-xs px-2 py-1 h-7">Add to Cart</Button>
          </div>
        </CardContent>
      </Card>
  )
}
