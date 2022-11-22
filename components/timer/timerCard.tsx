import styles from "./timerCard.module.css";

import { motion, useAnimationControls } from "framer-motion";

type TimerProps = {
  time: string;
  dateType: string;
};

const TimerCard = ({ time, dateType }: TimerProps) => {

  if (!time) return <div>Loading...</div>

  return (
    <div className={styles.timerCard}>
      <motion.div
        className={styles.cardWrapper}
        key={time}
        animate={{ rotateX: [0, 180, 0], opacity: [0, 1] }}
        transition={{ delay: -0.5, rotateX: { duration: 0.5 } }}
      >
        <h2 className={styles.numberText}>{time}</h2>
      </motion.div>
      <p className={styles.dateText}>{dateType}</p>
    </div>
  );
};

export default TimerCard;
