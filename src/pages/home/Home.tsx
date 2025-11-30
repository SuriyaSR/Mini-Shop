import { Button } from "@/components/ui/button";
import { useGetProductsQuery } from "@/api/productApi";
import ProductCardSkeleton from "../../components/product/ProductCardSkeleton";
import ProductGrid from "@/components/product/ProductGrid";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {

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
    <div className="min-h-[400px]">
      <AnimatePresence  mode="wait">
        {isLoading && (
          <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))}
              </div>
          </motion.div>
        )}
        {
          !isLoading && data && (
            <motion.div
              key="skeleton"
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

export default Home
