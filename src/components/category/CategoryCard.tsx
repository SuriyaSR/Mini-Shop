import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { motion, type Variants } from "framer-motion"
import { useNavigate } from "react-router-dom";
import { useGetProductCategoryImageQuery } from "@/api/categoryApi";
import type { Category } from "@/types/category";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    }
  },
}

const CategoryCard = ({ categoryObject }: { categoryObject: Category }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const navigate = useNavigate();
  const firstProduct = useGetProductCategoryImageQuery(categoryObject.slug);
  const categoryData = firstProduct.data?.products[0]; 

  const variants = prefersReducedMotion ? {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, transition: { duration: 0.4, delay: 0.1 } },
    exit: { opacity: 0 },
  } : cardVariants;
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      exit="exit"
      layout
      whileHover={!prefersReducedMotion ? { scale: 1.04 } : undefined}
      transition={{ duration: 0.25 }}
      className="cursor-pointer" onClick={() => navigate(`/category/${categoryObject.slug}`)}
    >
      <div className="w-full rounded-xl shadow-sm border-2 bg-background/40
        hover:shadow-lg transition-all hover:-translate-y-1 p-4">
        <div className="rounded-xl flex items-center justify-center h-44 w-full overflow-hidden object-contain bg-background/60">
              <motion.img
                src={categoryData?.thumbnail}
                loading="lazy"
                alt={categoryData?.description}
                className="h-full p-3 object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>

          <p className="mt-3 text-center text-lg font-semibold text-foreground/80">
            {categoryObject.name}
          </p>
      </div>
    </motion.div>
  )
}

export default CategoryCard
