import { useGetCategoriesQuery } from "@/api/categoryApi";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";
import CategoryCard from "../category/CategoryCard";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const CategoryCarousel = () => {
    const {data} = useGetCategoriesQuery();
    const navigate = useNavigate();
    const categories = data? data : [] ;
  return (
    <div className="">
        {/* HEADER */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl font-semibold">Category</h2>

        <div className="flex items-center gap-2">
          <Button className="h-8 px-4 rounded-full bg-green-600 hover:bg-green-700 text-white"
          onClick={() => navigate("/products/") }>
            View All
          </Button>
        </div>
      </div>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full m-2"
    >
      <CarouselContent>
        {categories.map((categoryItem) => (
          <CarouselItem key={categoryItem.slug} className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6 ">
            <CategoryCard categoryObject={categoryItem}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="rounded-full p-2 shadow-md bg-white hover:bg-gray-100"/>
      <CarouselNext className="rounded-full p-2 shadow-md bg-white hover:bg-gray-100"/>
    </Carousel>
    </div>
  )
}

export default CategoryCarousel
