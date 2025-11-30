import type { ProductReview } from "@/types/product";
import { CircleUser } from "lucide-react";
import ProductRating from "./ProductRating";

const ProductReviews = ({reviews}: {reviews?: ProductReview[]}) => {
  const totalReviews = reviews ? reviews.length : 0;
  return (
    <div className="border rounded-xl p-4 bg-background shadow-sm space-y-4">
      <p className="text-xl font-semibold border-b pb-2">{totalReviews} Customer Reviews</p>
      
      {totalReviews > 0 ? (
        reviews?.map((review, index) => (
          <div key={index}>
            <div className="flex gap-2 items-center">
              <CircleUser className="w-5 h-5 text-gray-400"/> 
               <span className="text-gray-500 font-bold">{review.reviewerName}</span>              
            </div>            
            <div className="mt-1">
              <ProductRating ratingValue = {review.rating} />
            </div>
             <p className="text-sm mt-2">{review.comment}</p>
             <p className="text-gray-500 mt-1 text-xs">
              Reviewed on {new Date(review.date).toLocaleDateString()}
            </p>
          </div>)
        )
      ) : null}
    </div>
  )
}

export default ProductReviews
