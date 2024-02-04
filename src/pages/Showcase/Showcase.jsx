import React from "react";
import Userdata from "../../components/Userdata";
import Notes from "../../components/Notes/Notes";
import Timer from "../../components/Timer/Timer";
import News from "../../components/News/News";
import Weather from "../../components/Weather/Weather";
import "./showcasestyle.css";
import { useNavigate } from "react-router-dom";

const Showcase = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="showcase">
        <div className="wrapper">
          <div className="box1">
            <Userdata />
          </div>
          <div className="box2">
            <Weather />
          </div>
          <div className="box3">
            <Notes />
          </div>
          <div className="box4">
            <Timer />
          </div>
          <div className="box5">
            <News />
          </div>
        </div>
      </div>
      <button className="showcase-btn" onClick={() => navigate("/movies")}>
        Browse
      </button>
    </>
  );
};

export default Showcase;
