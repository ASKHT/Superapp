import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../MovieBox";
import "./indexstyle.css";
import Chip from "../Chip";
const genre = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "140px", height: "100px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "140px", height: "100px" }} src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "140px", height: "100px" }} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "140px", height: "100px" }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "140px", height: "100px" }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "140px", height: "100px" }} src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "140px", height: "100px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "140px", height: "100px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "140px", height: "100px" }} src={western} />,
  },
];
function Info() {
  const [selectedmovie, Setselectedmovie] = useState([]);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="left-container">
        <h1 style={{ color: "#72DB73", fontFamily: "Single Day" }}>
          <strong>Super App</strong>
        </h1>
        <div className="left-container-child">
          <h1>
            <strong>Choose Your</strong>
          </h1>
          <h1>
            <strong>Entertainment</strong>
          </h1>
          <h1>
            <strong>Category</strong>
          </h1>
        </div>
        <div
          className="selectedgenre"
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",

            // marginTop: "0px",
            color: "white",
            width: "60%",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {selectedmovie.map((movie) => (
            <Chip
              key={movie}
              data={movie}
              selectedmovie={selectedmovie}
              Setselectedmovie={Setselectedmovie}
            />
          ))}
        </div>
        {selectedmovie.length < 3 ? (
          <p style={{ color: "red" }}>Minimum 3 categories are required</p>
        ) : (
          <></>
        )}
      </div>
      <div className="right-container">
        {genre.map((item, index) => (
          <Box
            key={item.id}
            data={item}
            selectedmovie={selectedmovie}
            Setselectedmovie={Setselectedmovie}
          />
        ))}
        <button
          style={{
            background: "green",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            width: "8rem",
            height: "3rem",
            color: "white",
            marginRight: "0px", // Add margin to both sides
            display: "block", // Set display to block
            // marginLeft:"28rem",
            transform: "translateX(30rem)",
          }}
          onClick={() => {
            window.localStorage.setItem(
              "selectedMovies",
              JSON.stringify(selectedmovie)
            );
            navigate("/showcase");
          }}
          disabled={selectedmovie.length < 3}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Info;
