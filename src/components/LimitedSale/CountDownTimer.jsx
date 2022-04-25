import React from "react";
import { useCountdown } from "../../hooks/useCountDown";

const CountDownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

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
        <div style={{ fontSize: "16px", fontWeight: "600" }}>
          {days}
          <small style={{ fontWeight: "400" }}>Days</small>
        </div>
        <div style={{ fontSize: "16px", fontWeight: "600" }}>
          {hours}
          <small style={{ fontWeight: "400" }}>Hours</small>
        </div>
        <div style={{ fontSize: "16px", fontWeight: "600" }}>
          {minutes}
          <small style={{ fontWeight: "400" }}>Min</small>
        </div>
        <div style={{ fontSize: "16px", fontWeight: "600" }}>
          {seconds}
          <small style={{ fontWeight: "400" }}>Sec</small>
        </div>
      </>
    );
  }
};

export default CountDownTimer;
