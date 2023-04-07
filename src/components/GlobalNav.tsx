import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import { useAppDispatch, useAppSelector } from "../hooks";
import { AppState } from "../store";
import { showCart } from "../store/cartSlice";

import { ItemsInCart } from "../types";
// import { useGetCartDataQuery } from "../store/cartApiSlice";

const GlobalNav: React.FC = () => {
  const dispatch = useAppDispatch();
  // const { data: items, isLoading, error } = useGetCartDataQuery();
  const items = useAppSelector((state: AppState) => state?.cart?.items) as {
    [id: string]: number;
  };
  const totalItems = Object.values((items as ItemsInCart) ?? {}).reduce<number>(
    (sum: number, i: number) => sum + i,
    0,
  );

  return (
    <>
      <nav className="flex pt-9">
        <div className="content-container justify-between">
          <Link href="/">
            <Image
              src="/logo_multi_color.svg"
              alt="Fast Growing Trees Logo"
              height={38}
              width={30}
            />
          </Link>
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
