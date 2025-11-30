import { StarIcon } from "lucide-react"

const ProductRating = ({ratingValue}:{ratingValue: number}) => {
  return (
    <div className="flex items-center space-x-1 mb-2">
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                className={`h-3 w-3 ${
                  ratingValue >= star
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {ratingValue}
          </span>
    </div>
  )
}

export default ProductRating
