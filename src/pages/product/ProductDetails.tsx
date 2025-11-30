import { useGetProductByIdQuery } from "@/api/productApi";
import ProductActions from "@/components/product/details/ProductActions";
import ProductDetailsSkeleton from "@/components/product/details/ProductDetailsSkeleton";
import ProductGallery from "@/components/product/details/ProductGallery";
import ProductInfo from "@/components/product/details/ProductInfo";
import ProductReviews from "@/components/product/details/ProductReviews";
import ProductSpecifications from "@/components/product/details/ProductSpecifications";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom"

const ProductDetails = () => {
    const {id} = useParams();
    const numericId = Number(id);
    const { data, isLoading, isError } = useGetProductByIdQuery(numericId);

    if (!id) return <div>Invalid product ID</div>;

    if (isLoading) return <ProductDetailsSkeleton />

    if (isError) {
        return(
      <div className="text-center py-4">
        <p className="text-gray-500">Failed to load products...</p>
        <Button size="sm" variant="outline">Retry</Button>
      </div>
    )}

    if (!data) return null;
        
  return (
    <div className="max-w-6xl mt-10 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-10 border rounded-xl  bg-background shadow-sm ">
      <ProductGallery images={data.images} thumbnail={data.thumbnail} />
      <div className="space-y-6">
        <ProductInfo product={data} />     
        <ProductActions/>  
      </div>
      <ProductSpecifications product={data} />
      <ProductReviews reviews={data.reviews}/>       
    </div>
  )
}

export default ProductDetails
