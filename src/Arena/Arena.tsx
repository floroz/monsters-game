import React, { useReducer, useEffect, useState } from "react";
import styles from "./Arena.module.scss";
import Player from "../Player/Player";
import Controls from "../Controls/Controls";
import { reducer, initialState } from "../store/reducer";
import { diceRoll } from "../utils";
import Dialog from "../Dialog/Dialog";
import {
  PLAYER_TWO_HIT,
  PLAYER_ONE_HIT,
  DICE_ONE,
  DICE_TWO,
  DICE_THREE,
  DICE_FOUR,
  GAME_OVER,
  RESTART
} from "../store/actionTypes";

interface Props {}

const Arena: React.FC<Props> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    playerOneScore,
    playerTwoScore,
    diceOne,
    diceTwo,
    diceThree,
    diceFour,
    gameIsOver
  } = state;

  useEffect(() => {
    // setup
  }, []);

  /**
   * This effect watches for changes on the player scores and triggers the game over
   */
  useEffect(() => {
    if (playerOneScore <= 0 || playerTwoScore <= 0) {
      dispatch({ type: GAME_OVER });
    }
  }, [playerOneScore, playerTwoScore]);

  const onAttack = (): void => {
    // Player 1
    // roll dice 1 and roll dice 2 and save player1Roll
    const dice1 = diceRoll();
    dispatch({ type: DICE_ONE, payload: dice1 });
    const dice2 = diceRoll();
    const player1Roll = dice1 + dice2;
    dispatch({ type: DICE_TWO, payload: dice2 });

    // Player 2
    // roll dice 3 and roll dice 4 and save player2Roll
    const dice3 = diceRoll();
    dispatch({ type: DICE_THREE, payload: dice3 });
    const dice4 = diceRoll();
    dispatch({ type: DICE_FOUR, payload: dice4 });
    const player2Roll = dice3 + dice4;

    // Check the winner of the round
    let hitAmount: number;

    if (player1Roll === player2Roll) {
      // draw round
      return;
    } else if (player1Roll > player2Roll) {
      // player 2 gets hit
      hitAmount = player1Roll - player2Roll;
      dispatch({ type: PLAYER_TWO_HIT, payload: hitAmount });
    } else {
      // player 1 gets hit
      hitAmount = player2Roll - player1Roll;
      dispatch({ type: PLAYER_ONE_HIT, payload: hitAmount });
    }

    // reduce losing player health

    // display UI
  };

  const onRestart = (): void => {
    dispatch({ type: RESTART });
  };

  return (
    <section className={styles.section}>
      <Player score={playerOneScore} />
      <Controls onAttack={onAttack} />
      <Player score={playerTwoScore} />
      {gameIsOver && <Dialog onRestart={onRestart} />}
    </section>
  );
};

export default Arena;
