import React, { useEffect, useState } from "react";
import styles from "./Player.module.scss";

interface IProps {
  score: number;
  diceOne?: number;
  diceTwo?: number;
  diceThree?: number;
  diceFour?: number;
  imgSrc: string;
}

const Player: React.FC<IProps> = ({
  score,
  diceOne,
  diceTwo,
  diceThree,
  diceFour,
  imgSrc
}) => {
  const [playerOne, setPlayerOne] = useState(false);

  useEffect(() => {
    /**
     * If there are dice 1 and 2 then it's player one, otherwise
     * it's player 2
     */
    if (typeof diceOne === "number" && typeof diceTwo === "number") {
      // Player 1: position on left
      setPlayerOne(true);
    } else {
      // Player 2: position on right
      return;
    }
  }, [diceOne, diceTwo]);

  return (
    <div className={`${playerOne ? styles.playerOne : styles.playerTwo}`}>
      <figure className={styles.imgContainer}>
        <img src={imgSrc} alt="" />
      </figure>
      <div className={styles.progressBar}>
        <span style={{ height: `${score}%` }}></span>
      </div>
      <div className={styles.diceBox}>
        <div>{playerOne ? diceOne : diceThree}</div>
        <div>{playerOne ? diceTwo : diceFour}</div>
      </div>
    </div>
  );
};

export default Player;
