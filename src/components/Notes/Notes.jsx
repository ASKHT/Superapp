import { useState } from "react";
import "./style.css";
export default function Notes() {
  const [notes, setNotes] = useState(
    JSON.parse(window.localStorage.getItem("notes")) || ""
  );

  const handleChange = (e) => {
    const newNotes = e.target.value;
    setNotes(newNotes);
    window.localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  return (
    <div className="textarea">
      <div>All Notes</div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={notes}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
