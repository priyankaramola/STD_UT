import React from "react";
import Layout from "../../../Components/Layout/Layout";
// Components
import Left from "./Left";
import Right from "./Right";

const Body = ({ title }) => {
  return (
    <Layout title={title}>
      <div style={{ display: "flex", marginTop: 85, padding: 20 }}>
        <Left />
        <Right title={title} />
      </div>
    </Layout>
  );
};

export default Body;
