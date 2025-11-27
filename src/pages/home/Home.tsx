// import { ImageData } from "@/lib/constants"
import { Button } from "@/components/ui/button";
import { ProductDetails } from "../product/ProductDetails";
import { useGetProductsQuery } from "@/api/productApi";

const Home = () => {
    // const products = ImageData;

  const {data, isLoading, isError} = useGetProductsQuery();
  if(isLoading){
    return(
      <div className="text-center py-4">
        <p className="text-gray-500">Loading Products...</p>
      </div>
    )
  } else if (isError){
    return(
      <div className="text-center py-4">
        <p className="text-gray-500">Failed to load products...</p>
        <Button size="sm" variant="outline">Retry</Button>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data?.products.map((product) => (
            <ProductDetails productData={product} key={product.id}/>
         ))}
    </div>
  )
}

export default Home
