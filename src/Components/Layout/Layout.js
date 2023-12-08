import React from "react";
import Header from "./Header";

const Layout = ({ children, title, showBackButton }) => {
  return (
    <div>
      <Header title={title} showBackButton={showBackButton} />
      <main style={{ minHeight: "72vh" }}> {children}</main>
    </div>
  );
};
export default Layout;
