import React from "react";
import styles from "./Controls.module.scss";

interface Props {
  onAttack: () => void;
  msg: string;
}

const Controls: React.FC<Props> = ({ onAttack, msg }) => {
  return (
    <div className={styles.controls}>
      <h2 className={styles.title}>{msg}</h2>
      <button className={styles.button} onClick={onAttack}>
        Attack!
      </button>
    </div>
  );
};

export default Controls;
