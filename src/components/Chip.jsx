<<<<<<< HEAD
export default function Chip({data, selectedmovie, Setselectedmovie }) {
    const handleClick = () => {
      if (selectedmovie.includes(data)) {
       Setselectedmovie((prev) => prev.filter((item) => item !== data));
      } else {
        Setselectedmovie((prev) => [...prev, data]);
      }
    };
    return (
      <div style={{ background: "green", padding: "12px", borderRadius: "50px",height:"20px",width:"100px" }}>
        {data}
        &nbsp;&nbsp;
      <span onClick={handleClick} style={{color:"red"}}> X</span>
      </div>
    );
  }
=======
/* eslint-disable react/prop-types */
export default function Chip({ data, selectedMovies, setSelectedMovies }) {
  const handleClick = () => {
    if (selectedMovies.includes(data)) {
      setSelectedMovies((prev) => prev.filter((item) => item !== data));
    } else {
      setSelectedMovies((prev) => [...prev, data]);
    }
  };
  return (
    <div style={{ background: "green", padding: "12px", borderRadius: "12px" }}>
      {data}
      &nbsp;&nbsp;
      <span onClick={handleClick}> X</span>
    </div>
  );
}
>>>>>>> 8de5895e704e1c00d2a276c0bffaa074b2b2b458
