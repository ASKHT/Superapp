export default function Chip({ data, selectedmovie, Setselectedmovie }) {
  const handleClick = () => {
    if (selectedmovie.includes(data)) {
      Setselectedmovie((prev) => prev.filter((item) => item !== data));
    } else {
      Setselectedmovie((prev) => [...prev, data]);
    }
  };
  return (
    <div
      style={{
        background: "green",
        padding: "12px",
        borderRadius: "50px",
        height: "20px",
        width: "100px",
      }}
    >
      {data}
      &nbsp;&nbsp;
      <span onClick={handleClick} style={{ color: "red" }}>
        {" "}
        X
      </span>
    </div>
  );
}
