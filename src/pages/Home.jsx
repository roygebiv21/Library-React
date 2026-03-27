import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Featured from "../components/Featured";
import CheapBooks from "../components/CheapestBooks";
import Explore from "../components/Explore";


const Home = () => {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <Featured />
        <CheapBooks />
        <Explore />
      </main>
    </>
  );
};

export default Home;
