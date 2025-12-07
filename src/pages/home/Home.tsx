import Banner from "@/components/layout/Banner"
import CategoryCarousel from "@/components/layout/CategoryCarousel"
// import ProductResults from "../product/ProductResults"

const Home = () => {

  return (
    <div className="m-4 md:m-12 sm:m-6">
      <CategoryCarousel />
      <Banner />
    </div>
  )
}

export default Home
