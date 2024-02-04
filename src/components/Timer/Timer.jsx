import React from "react";
import { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import "./timer.css";
const Timer = () => {
  const [minute, Setminute] = useState(0);
  const [second, Setsecond] = useState(0);
  const [hour, Sethour] = useState(0);
  const [time, setTime] = useState(0);
  const [btndisable, Setbtndisable] = useState(false);

  const increasesecond = () => {
    if (second === 59) {
      Setminute(minute + 1);
      Setsecond(0);
      return;
    }
    Setsecond(second + 1);
  };
  const decreasesecond = () => {
    if (second === 0) {
      return;
    }
    Setsecond(second - 1);
  };

  const increaseminute = () => {
    if (minute === 59) {
      Setminute(0);
      Sethour(hour + 1);
      return;
    }
    Setminute(minute + 1);
  };

  const decreaseminute = () => {
    if (minute === 0) {
      return;
    }
    Setminute(minute - 1);
  };
  const increasehour = () => {
    if (hour === 23) {
      return;
    }
    Sethour(hour + 1);
  };
  const decreasehour = () => {
    if (hour == 0) {
      return;
    }
    Sethour(hour - 1);
  };
  const onComplete = () => {
    Sethour(0);
    Setminute(0);
    Setsecond(0);
    setTime(0);
    Setbtndisable(false);
    window.location.reload();
  };
  const handleclick = () => {
    const remaingingtime = second + minute * 60 + hour * 60 * 60;
    setTime(remaingingtime);
    Setbtndisable(true);
  };

  function children(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="timer">
      <CountdownCircleTimer
        isPlaying
        onComplete={onComplete}
        duration={time}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => children(remainingTime)}
      </CountdownCircleTimer>
      <div>
        <div className="time">
          <div className="time-count">
            <div className="">Hours</div>
            <BiSolidUpArrow onClick={increasehour} />
            <div className="">{hour}</div>
            <BiSolidDownArrow onClick={decreasehour} />
          </div>

          <div className="colon"> : </div>

          <div className="time-count">
            <div className="">Minutes</div>
            <BiSolidUpArrow onClick={increaseminute} />
            <div className="">{minute}</div>
            <BiSolidDownArrow onClick={decreaseminute} />
          </div>

          <div className="colon"> : </div>

          <div className="time-count">
            <div className="">Second</div>
            <BiSolidUpArrow onClick={increasesecond} />
            <div className="">{second}</div>
            <BiSolidDownArrow onClick={decreasesecond} />
          </div>
        </div>
        <button
          className="timer-btn"
          disabled={btndisable}
          onClick={handleclick}
        >
          Start
        </button>
      </div>
      {/* <audio src={audio} ref={audioref}></audio> */}
    </div>
  );
};

export default Timer;
