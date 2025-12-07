import { Button } from "@/components/ui/button";
import ProductCardSkeleton from "../../components/product/skeleton/ProductCardSkeleton";
import ProductGrid from "@/components/product/ProductGrid";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useGetProductByCategoryQuery } from "@/api/categoryApi";
import { useGetProductsQuery } from "@/api/productApi";

const ProductResults = () => {
  const { category } = useParams();
  
 // 1. Fetch ALL products if NO category is selected
  const { 
    data: allData, 
    isLoading: isLoadingAll, 
    isError: isErrorAll 
  } = useGetProductsQuery(undefined, {
    skip: !!category, // Skip this query if category exists
  });

  // 2. Fetch CATEGORY products if category IS selected
  const { 
    data: categoryData, 
    isLoading: isLoadingCategory, 
    isError: isErrorCategory 
  } = useGetProductByCategoryQuery(category ?? "", {
    skip: !category, // Skip this query if category is missing
  });

  // Determine which data to use based on the route
  const data = category ? categoryData : allData;
  const isLoading = category ? isLoadingCategory : isLoadingAll;
  const isError = category ? isErrorCategory : isErrorAll;  

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