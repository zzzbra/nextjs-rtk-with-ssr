import React from "react";
import Image from "next/image";
import ThumbnailImage from "./ThumbnailImage";
import { currencyFormatter } from "../utils/currency";
import { ProductState } from "../types";
import { useAppDispatch } from "../hooks";
import { addItem, removeAll, removeItem } from "../store/cartSlice";

const CartItem: React.FC<{
  product: ProductState;
  isRecommendation?: boolean;
}> = ({ product, isRecommendation = false }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex p-5 justify-between">
      <div className="flex">
        <div className="max-w-[110px]">
          <ThumbnailImage product={product} />
        </div>
        <div
          className={`pl-5 pr-10 flex flex-col justify-${
            isRecommendation ? "center" : "between"
          }`}
        >
          <h4
            style={{ lineHeight: 1.2 }}
            className={isRecommendation ? "text-lg" : "text-md"}
          >
            {product.title}
          </h4>
          {!isRecommendation && (
            <>
              <div className="text-sm">
                {currencyFormatter.format(
                  (product.quantity ?? 1) * product.price,
                )}
              </div>
              <div className="flex">
                <button onClick={() => dispatch(removeItem(product.id))}>
                  <Image
                    src="/minus_circle.svg"
                    width={19}
                    height={19}
                    alt="Decrement Icon"
                  />
                </button>
                <span className="px-2.5">{product.quantity}</span>
                <button onClick={() => dispatch(addItem(product.id))}>
                  <Image
                    src="/plus_circle.svg"
                    width={19}
                    height={19}
                    alt="Increment Icon"
                  />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {isRecommendation ? (
        <button
          className="shrink-0"
          onClick={() => dispatch(addItem(product.id))}
        >
          <Image
            src="/plus_circle.svg"
            width={36}
            height={36}
            alt="Remove All from Cart Icon"
          />
        </button>
      ) : (
        <button
          className="shrink-0"
          onClick={() => dispatch(removeAll(product.id))}
        >
          <Image
            src="/trash.svg"
            width={36}
            height={36}
            alt="Remove All from Cart Icon"
          />
        </button>
      )}
    </div>
  );
};

export default CartItem;
