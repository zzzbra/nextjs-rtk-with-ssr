import React from "react";
import { ProductData } from "../types";

const ProductCard = ({ product }: { product: ProductData }) => {
  // use global view port logic to determine ideal image dimensions to use here
  const [firstImage] = product.images;
  return (
    <a href={`/products/${product.id}`} className="group/product-link">
      <div className="rounded-md bg-white shadow-md overflow-hidden">
        <div className="overflow-hidden">
          <img
            className="group-hover/product-link:scale-105 transition-all duration-500"
            src={firstImage.src}
          />
        </div>
        <section className="min-h-[75px] py-4 px-16 flex items-center justify-center text-center">
          <h3 className="leading-none">{product.title}</h3>
        </section>
      </div>
    </a>
  );
};

export default ProductCard;
