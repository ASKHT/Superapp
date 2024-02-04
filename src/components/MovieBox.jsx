import React from "react";

const Box = ({ data, selectedmovie, Setselectedmovie }) => {
  const handleClick = () => {
    if (selectedmovie.includes(data.id)) {
      Setselectedmovie((prev) => prev.filter((item) => item !== data.id));
    } else {
      Setselectedmovie((prev) => [...prev, data.id]);
    }
  };
  return (
    <div
      style={{
        width: "180px",
        height: "180px",
        background: data.color,
        borderRadius: "12px",
        border: `${
          selectedmovie.includes(data.id)
            ? "4px solid green"
            : "4px solid black"
        }`,
      }}
      onClick={handleClick}
    >
      <h2>{data.id}</h2>
      {data.image}
    </div>
  );
};

export default Box;
