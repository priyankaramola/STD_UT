import React from "react";
import Layout from "../../Components/Layout/Layout";

const Home = ({ title }) => {
  return (
    <Layout title={title}>
      <div style={{ marginTop: 75 }}>
        <p>Hello from home page</p>
      </div>
    </Layout>
  );
};

export default Home;
