import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"
import type { Product } from "@/types/product"
import { motion, type Variants } from "framer-motion"
import { StarIcon } from "lucide-react"

const cardVariants : Variants = {
  hidden: {opacity:0, y: 40, scale: 0.95},
  show: {opacity:1, y: 0, scale: 1,
  transition: {
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1],
  }},
}

export function ProductCard({productData} : {productData: Product}) {

  const prefersReducedMotion = usePrefersReducedMotion();

  const variants = prefersReducedMotion ? {
    hidden: {opacity:0, y: 60},
    show: {opacity:1, transition:{ duration: 0.4, delay: 0.1 }},
    exit: {opacity:0},
  } : cardVariants;

  return (
  <motion.div
    variants={variants}
    initial="hidden"
    animate="show"
    exit="exit"
    layout
    whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
    transition={{ duration: 0.25 }}
    className="rounded-xl"
  >
    <Card className="w-full py-3 rounded-xl shadow-sm bg-white transition-transform">
      <CardContent className="px-3">
        <CardTitle className="text-sm mb-1">
          <div className="rounded-md bg-gray-100 mb-2">
            <motion.img
              src={productData.thumbnail}
              loading="lazy"
              alt={productData.description}
              className="w-full h-48 object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
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
          <Button size="sm" className="text-xs px-2 py-1 h-7">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

}
