import React from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

import ProgressBar from "../ProgressBar";
import CartItem from "./CartItem";
import { ProductData, ProductState } from "../../types";
import { formatUsd } from "../../utils/currency";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { AppState } from "../../store";
import { useGetShopDataQuery } from "../../store/shopApiSlice";
import { hideCart } from "../../store/cartSlice";
import dynamic from "next/dynamic";

type Props = {};

const FREE_SHIPPING_THRESHOLD = 150;
const PLANTING_KIT_ID = 1532751872052;
const PRUNER_ID = 4813305610302;

const Cart: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetShopDataQuery();

  const { items: cart = {}, isVisible = false } = useAppSelector(
    (state: AppState) => state?.cart,
  );

  if (isLoading) {
    return null;
  }

  if (error) {
    return <>Error</>;
  }

  // TODO: Offload these determinations to redux store, update these counts via
  // each action
  const itemsInCart: ProductState[] = (data?.products ?? []).reduce(
    (products: ProductState[], curr: ProductData) => {
      if (Object.keys(cart).includes(curr.id.toString())) {
        products.push({
          ...curr,
          quantity: cart[curr.id],
        });
      }
      return products;
    },
    [],
  );

  type NumberTuple = [number, number, number, number];
  const [subtotal, totalTrees, totalKits, totalPruners] =
    itemsInCart.reduce<NumberTuple>(
      (
        [sum, treeCount, kitCount, prunerCount]: NumberTuple,
        curr: ProductState,
      ) => {
        return [
          (curr.quantity ?? 1) * curr.price + sum,
          (treeCount += curr.product_type === "Tree" ? cart[curr.id] : 0),
          (kitCount += curr.id === PLANTING_KIT_ID ? cart[curr.id] : 0),
          (prunerCount += curr.id === PRUNER_ID ? cart[curr.id] : 0),
        ];
      },
      [0, 0, 0, 0],
    );

  const planterRec = data?.recommendations.find(
    ({ id }) => id === PLANTING_KIT_ID,
  );
  const prunerRec = data?.recommendations.find(({ id }) => id === PRUNER_ID);
  const recommendations: ProductState[] = [];
  if (totalTrees > totalKits && planterRec) recommendations.push(planterRec);
  if (!totalPruners && prunerRec) recommendations.push(prunerRec);

  return (
    <>
      <Transition
        className="fixed w-screen h-screen bg-gray opacity-80"
        show={isVisible}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-80"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-80"
        leaveTo="opacity-0"
      />
      <aside
        className={`p-5 fixed bg-white top-0 h-screen max-w-[440px] transition-all duration-500 ${
          isVisible ? "right-0" : "-right-[440px]"
        }`}
      >
        <nav className="flex justify-center">
          <button
            onClick={() => dispatch(hideCart())}
            className="absolute left-5"
          >
            <Image src="/close.svg" width={30} height={30} alt="Close Icon" />
          </button>
          <h2 className="self-center">
            <Image
              src="/cart_outline.svg"
              width={40}
              height={37}
              alt="Shopping Cart Icon"
            />
          </h2>
        </nav>
        <section className="text-center my-5">
          <p className="my-5">
            {subtotal < FREE_SHIPPING_THRESHOLD ? (
              <>
                You're{" "}
                <span className="font-bold">
                  {formatUsd(FREE_SHIPPING_THRESHOLD - subtotal)}
                </span>{" "}
                away from free shipping!
              </>
            ) : (
              <>
                Free Shipping on all orders over{" "}
                {formatUsd(FREE_SHIPPING_THRESHOLD)}.
              </>
            )}
          </p>
          <ProgressBar total={150} current={subtotal} />
        </section>
        <section>
          <ul>
            {itemsInCart.map((product) => (
              <CartItem key={product.id} {...{ product }} />
            ))}
          </ul>
          <div className="flex justify-between pt-2.5 px-2.5">
            <span className="text-lg">Subtotal</span>{" "}
            <span className="text-lg">{formatUsd(subtotal)}</span>
          </div>
        </section>
        <hr className="rounded h-1 border-gray bg-gray my-5" />
        {recommendations?.length > 0 && (
          <section>
            <h3 className="text-2xl">Recommended Items</h3>
            <ul>
              {recommendations?.map((product) => (
                <CartItem product={product} key={product.id} isRecommendation />
              ))}
            </ul>
          </section>
        )}
      </aside>
    </>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
