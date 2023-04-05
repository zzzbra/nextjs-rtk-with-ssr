import React from "react";
import GlobalNav from "../components/GlobalNav";

const GlobalLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex min-h-screen flex-col pb-8">
      <GlobalNav />
      {children}
    </div>
  );
};

export default GlobalLayout;
