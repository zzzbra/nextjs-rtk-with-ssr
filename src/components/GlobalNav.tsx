import React from "react";
import Image from "next/image";
import Cart from "./Cart";
import { useAppDispatch, useAppSelector } from "../hooks";
import { AppState } from "../store";
import { showCart } from "../features/cart/cartSlice";

const GlobalNav: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state: AppState) => state.cart);
  const totalItems = Object.values(items ?? {}).reduce(
    (sum: number, i: number) => sum + i,
    0,
  );

  return (
    <>
      <nav className="flex pt-9">
        <div className="content-container justify-between">
          <a href="/">
            <Image
              src="/logo_multi_color.svg"
              alt="Fast Growing Trees Logo"
              height={38}
              width={30}
            />
          </a>
          <ul>
            <button className="relative" onClick={() => dispatch(showCart())}>
              <Image
                src="/cart_circle.svg"
                width={36}
                height={36}
                alt="Shopping Cart Icon"
              />
              {totalItems > 0 && (
                <span className="bg-red-500 rounded-full py-1 px-2 text-white text-[0.75rem] top-[-8px] right-[-8px] absolute leading-none">
                  {totalItems}
                </span>
              )}
            </button>
          </ul>
        </div>
      </nav>
      <Cart />
    </>
  );
};

export default GlobalNav;
