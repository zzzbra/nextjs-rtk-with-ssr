import React, { useState } from "react";
import Image from "next/image";
import Cart from "./Cart";

const GlobalNav: React.FC = () => {
  const [isSidePanelVisible, setIsSidePanelVisible] = useState(false);
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
            <button onClick={() => setIsSidePanelVisible(true)}>
              <Image
                src="/cart_circle.svg"
                width={36}
                height={36}
                alt="Shopping Cart Icon"
              />
            </button>
          </ul>
        </div>
      </nav>
      {isSidePanelVisible ? <Cart {...{ setIsSidePanelVisible }} /> : null}
    </>
  );
};

export default GlobalNav;
