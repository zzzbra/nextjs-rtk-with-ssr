import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type Props = {
  setIsSidePanelVisible: Dispatch<SetStateAction<boolean>>;
};

const Cart: React.FC<Props> = ({ setIsSidePanelVisible }) => {
  return (
    <section className="fixed top-0 left-0 h-screen">
      {/* handle overlay with pseudo el? */}
      {/* width is about 5/12 cols - use grid here */}
      <nav className="flex">
        <button onClick={() => setIsSidePanelVisible(false)}>
          <Image src="/close.svg" width={36} height={36} alt="Close Icon" />
        </button>
        <h2>
          <Image
            src="/cart_outline.svg"
            width={40}
            height={37}
            alt="Shopping Cart Icon"
          />
        </h2>
      </nav>
      <p>
        You're <span className="font-bold">$100.05</span> away from free
        shipping!
      </p>
    </section>
  );
};

export default Cart;
