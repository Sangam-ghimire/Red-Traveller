import React from "react";
import "../styles/Home.css";
import { FcExpand } from "react-icons/fc";
const Home = () => {
  return (
    <div className="home_MainContainer">
      <div className="home_BackgroundContainer">
        <p className="counter">
          THE COUNTER: <span>70</span> Countries <span>1036</span> Cities
        </p>
        <p className="slogan">Leave your mark on all over the world </p>
        <button className="navButton">Read More</button>
        <p className="small_Text">Scroll Down to Continue</p>
        <div className="iconFcExpand">
          <FcExpand color="#0336FF" />
        </div>
      </div>
      <div className="home_subContainerContent grid-items">
        <div className="first_Maingrid pink ">first</div>
        <div className="second_Maingrid yellow">
          <div className="purple grid-col-span-2">second child </div>
          <div className="brown">third child </div>
          <div className="brown">fourth child </div>
          <div className="brown">third child </div>
          <div className="brown">fourth child </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
