import { Button } from "@/components/ui/button";
import ProductCardSkeleton from "../../components/product/skeleton/ProductCardSkeleton";
import ProductGrid from "@/components/product/ProductGrid";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useGetProductByCategoryQuery } from "@/api/categoryApi";
import { useGetProductsQuery, useSearchProductsQuery } from "@/api/productApi";
import type { Product } from "@/types/product";

const ProductResults = () => {
  const { category, searchText } = useParams();

  // Determine the scenario:
  const isSearch = !!searchText;
  const isCategory = !!category && !searchText;  
  const isSearchWithCategory = !!searchText && !!category; 
  const isViewAll = !category && !searchText;

  let headingMessage = "";

  if (isSearch && !category) {
    headingMessage = `Search results for "${searchText}"`;
  }
  else if (isCategory && !isSearch) {
    headingMessage = `Showing products in "${category}"`;
  }
  else if (isViewAll) {
    headingMessage = "Showing all products";
  }
  else if (isSearchWithCategory) {
    headingMessage = `Search results for "${searchText}" in "${category}"`;
  }
  
 // FETCH — Search products
  const {
    data: searchData,
    isLoading: isLoadingSearch,
    isError: isErrorSearch
  } = useSearchProductsQuery(searchText!, {
    skip: !isSearch, // only fetch if searchText exists
  });

  // FETCH — Category products
  const {
    data: categoryData,
    isLoading: isLoadingCategory,
    isError: isErrorCategory
  } = useGetProductByCategoryQuery(category!, {
    skip: !isCategory, // skip if it's not a pure category scenario
  });

  // FETCH — All products
  const {
    data: allData,
    isLoading: isLoadingAll,
    isError: isErrorAll
  } = useGetProductsQuery(undefined, {
    skip: !isViewAll, // only fetch if we are in /products route
  });

  // 4️⃣ DETERMINE FINAL DATA

  let finalData : Product[] = [];
  let isLoading = false;
  let isError = false;

  // SCENARIO 1: /products/search/:searchText (search only)
  if (isSearch && !category) {
    finalData = searchData?.products || [];
    isLoading = isLoadingSearch;
    isError = isErrorSearch;
  }

  // SCENARIO 2: /products/:category (category only)
  else if (isCategory) {
    finalData = categoryData?.products || [];
    isLoading = isLoadingCategory;
    isError = isErrorCategory;
  }

  // SCENARIO 3: /products (view all)
  else if (isViewAll) {
    finalData = allData?.products || [];
    isLoading = isLoadingAll;
    isError = isErrorAll;
  }

  // SCENARIO 4: Search + Category filter combined
  else if (isSearchWithCategory) {
    // first take API search results
    const results = searchData?.products || [];

    // manually filter by category/
    finalData = results;
    finalData = results.filter(item => item.category === category);


    isLoading = isLoadingSearch;
    isError = isErrorSearch;
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products.</p>;
  if (finalData.length === 0) return <p>No products found.</p>;

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
      <h2 className="text-xl font-medium mt-4 px-6">{headingMessage}</h2>
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
          !isLoading && finalData && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}>
            <ProductGrid products={finalData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProductResults