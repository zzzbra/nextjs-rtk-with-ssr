import React from "react";
import { ProductData } from "../types";
import ThumbnailImage from "./ThumbnailImage";

const ProductCard: React.FC<{ product: ProductData }> = ({ product }) => {
  return (
    <a href={`/products/${product.id}`} className="group/product-link">
      <div className="rounded-md bg-white shadow-md overflow-hidden">
        <div className="overflow-hidden">
          <ThumbnailImage product={product} />
        </div>
        <section className="min-h-[75px] py-4 px-16 flex items-center justify-center text-center">
          <h3 className="leading-none">{product.title}</h3>
        </section>
      </div>
    </a>
  );
};

export default ProductCard;
