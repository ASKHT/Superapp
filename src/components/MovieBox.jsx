<<<<<<< HEAD
import React from 'react'

const Box = ({data, selectedmovie, Setselectedmovie}) => {
  const handleClick = () => {
    if (selectedmovie.includes(data.id)) {
      Setselectedmovie((prev) => prev.filter((item) => item !== data.id));
    } else {
      Setselectedmovie((prev) => [...prev, data.id]);
    }
  };
  return (
    //here i write the inline css for the movies genre cards
    <div style={{width:"180px",height:"180px",background:data.color,borderRadius:"12px", border: `${
      selectedmovie.includes(data.id)
        ? "4px solid green"
        : "4px solid black"
    }`,}} 
    onClick={handleClick}>
      <h2>{data.id}</h2>
      {data.image}
    </div>
    
  )
}

export default Box
=======
/* eslint-disable react/prop-types */
export default function Box({ data, selectedMovies, setSelectedMovies }) {
  const handleClick = () => {
    if (selectedMovies.includes(data.id)) {
      setSelectedMovies((prev) => prev.filter((item) => item !== data.id));
    } else {
      setSelectedMovies((prev) => [...prev, data.id]);
    }
  };
  return (
    <div
      style={{
        background: data.color,
        textAlign: "center",
        border: `${
          selectedMovies.includes(data.id)
            ? "4px solid green"
            : "4px solid black"
        }`,
      }}
      onClick={handleClick}
    >
      <h1>{data.id}</h1>
      {data.image}
    </div>
  );
}
>>>>>>> 8de5895e704e1c00d2a276c0bffaa074b2b2b458
