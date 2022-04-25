import React from "react";
import { useCountdown } from "../../hooks/useCountDown";

const CountDownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  console.log(days, hours, minutes, seconds);

  const ExpiredNotice = () => {
    return (
      <div className="expired-notice">
        <span>Expired!!!</span>
        <p>Please select a future date and time.</p>
      </div>
    );
  };

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <>
        <div style={{ fontSize: "14px", fontWeight: "600" }}>
          {days}&nbsp;
          <small style={{ fontWeight: "400" }}>days</small>
        </div>
        <div style={{ fontSize: "14px", fontWeight: "600" }}>
          {hours}&nbsp;
          <small style={{ fontWeight: "400" }}>Hours</small>
        </div>
        <div style={{ fontSize: "14px", fontWeight: "600" }}>
          {minutes}&nbsp;
          <small style={{ fontWeight: "400" }}>Min</small>
        </div>
        <div style={{ fontSize: "14px", fontWeight: "600" }}>
          {seconds}&nbsp;
          <small style={{ fontWeight: "400" }}>Seconds</small>
        </div>
      </>
    );
  }
};

export default CountDownTimer;
