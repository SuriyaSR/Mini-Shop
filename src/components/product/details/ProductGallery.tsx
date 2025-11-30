import { motion } from "framer-motion";
import { useState } from "react";

interface ProductGalleryProps{
    images?: string[];
    thumbnail:string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({images, thumbnail}) => {
    const imageList = images && images.length > 0 ? images : [thumbnail];
    const [useImage, setUseImage] = useState(imageList[0]);    

  return (
    <div className="space-y-4">
       <motion.img
              src={useImage}
              loading="lazy"
              className="w-full h-80 object-contain bg-background rounded-2xl p-4 content-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
        />
        { imageList.length > 1 && (
        <div className="flex gap-3 mt-3 justify-center">
            {imageList.map((img, index) =>  
            <div key={index} onClick={() => setUseImage(img)} 
            className={`h-16 w-16 border rounded-md p-1 cursor-pointer bg-background
            ${useImage === img ? 'border-black' : 'border-border'}`}>
                <img src={img} className="w-full h-full rounded-md object-contain"/>
            </div>
               
            )}
        </div>
    )}
    </div>
  )
}

export default ProductGallery
