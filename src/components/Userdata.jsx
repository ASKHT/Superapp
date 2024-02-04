import React from "react";
import profileimage from "../assets/profileimage.png";
const Userdata = () => {
  const userdata = JSON.parse(localStorage.getItem("userInfo"));
  const filmdata = JSON.parse(localStorage.getItem("selectedMovies"));
  return (
    <div
      style={{
        display: "flex",
        width: "25rem",
        height: "14rem",
        backgroundColor: "#5746EA",
        borderRadius: "12px",
        justifyContent: "space-around",
      }}
    >
      {" "}
      <>
        <style>
          {`
        ::-webkit-scrollbar {
          display: none;
        }
      `}
        </style>
        {/* ... rest of your component code */}
      </>
      <img
        style={{ width: "90px", height: "11rem", marginTop: "2rem" }}
        src={profileimage}
        alt="profileimage"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ color: "white" }}>
          <p>{userdata.name}</p>
          <p>{userdata.username}</p>
          <h2>{userdata.email}</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "15rem",
            overflowY: "scroll",
          }}
        >
          {filmdata?.map((movie) => {
            return (
              <button
                key={movie}
                style={{
                  backgroundColor: "#9F94FF",
                  color: "white",
                  borderRadius: "8px",
                  padding: "8px",
                  margin: "4px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {movie}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Userdata;
