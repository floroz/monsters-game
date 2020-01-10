import React from "react";
import styles from "./Dialog.module.scss";

interface Props {
  onRestart: () => void;
}

const Dialog: React.FC<Props> = ({ onRestart }) => {
  return (
    <>
      <div className={styles.backdrop} role="presentation"></div>
      <div className={styles.modal}>
        <h2 className={styles.gameOver}>Game Over!</h2>
        <button className={styles.playAgain} onClick={onRestart}>
          Play Again
        </button>
      </div>
    </>
  );
};

export default Dialog;
