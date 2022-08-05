import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">Container</div>
    </div>
  );
};

export default Home;