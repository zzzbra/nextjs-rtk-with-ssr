import React, { useState } from "react";
import Image from "next/image";
import { ProductData } from "../types";

const ThumbnailImage: React.FC<{ product: ProductData }> = ({ product }) => {
  const [firstImage] = product?.images;
  const [thumbnail, setThumbnail] = useState(product?.thumbnail);
  return (
    <div>
      <Image
        className="group-hover/product-link:scale-105 transition-all duration-500"
        width={thumbnail.width}
        height={thumbnail.height}
        src={thumbnail.src}
        onError={() => setThumbnail(firstImage)}
        alt={`Image of ${product.title}`}
      />
    </div>
  );
};

export default ThumbnailImage;
