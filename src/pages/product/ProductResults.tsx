import { Button } from "@/components/ui/button";
import { useGetProductsQuery } from "@/api/productApi";
import ProductCardSkeleton from "../../components/product/skeleton/ProductCardSkeleton";
import ProductGrid from "@/components/product/ProductGrid";
import { AnimatePresence, motion } from "framer-motion";

const ProductResults = () => {

  const {data, isLoading, isError} = useGetProductsQuery();

  if (isError){
    return(
      <div className="text-center py-4">
        <p className="text-gray-500">Failed to load products...</p>
        <Button size="sm" variant="outline">Retry</Button>
      </div>
    )
  }
  return (
    <div>
      <AnimatePresence>
        {isLoading && (
          <motion.div
              key="skeleton"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {Array.from({ length: 20 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))}
              </div>
          </motion.div>
        )}
        {
          !isLoading && data && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}>
            <ProductGrid products={data.products} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProductResults