import type { Product } from "@/types/product"
import { ProductCard } from "./ProductCard"
import { motion, type Variants } from "framer-motion"

const gridVariants: Variants ={
  hidden: {},
  show:{
    transition: {
      staggerChildren: 0.12,
    }
  }
}

const ProductGrid = ({products} : {products: Product[]}) => {
  return (
   <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
      variants={gridVariants} initial="hidden" animate="show" layout>
         {products?.map((product) => (
               <ProductCard productData={product} key={product.id}/>
            ))}
       </motion.div>
  )
}

export default ProductGrid
