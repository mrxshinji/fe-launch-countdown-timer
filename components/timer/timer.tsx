import styles from "./timer.module.css";
import TimerCard from "./timerCard";

import { useCountdown } from "../../utils/useCountdown";
const Timer = () => {
  //ISO Date "2015-03-25T12:00:00+08:00"
  const [days, hours, minutes, seconds] = useCountdown(
    "2023-11-18T16:00:00+08:00"
  );

  return (
    <div className={styles.container}>
      <TimerCard time={`${days}`} dateType='DAYS' />
      <TimerCard time={`${hours}`} dateType='HOURS' />
      <TimerCard time={`${minutes}`} dateType='MINUTE' />
      <TimerCard time={`${seconds}`} dateType='SECONDS' />
    </div>
  );
};

export default Timer;
