import {
  PLAYER_ONE_HIT,
  PLAYER_TWO_HIT,
  DICE_ONE,
  DICE_TWO,
  DICE_THREE,
  DICE_FOUR,
  GAME_OVER,
  RESTART
} from "./actionTypes";

type GameState = {
  playerOneScore: number;
  playerTwoScore: number;
  diceOne: number;
  diceTwo: number;
  diceThree: number;
  diceFour: number;
  gameIsOver: boolean;
};

export const initialState: GameState = {
  playerOneScore: 100,
  playerTwoScore: 100,
  diceOne: 0,
  diceTwo: 0,
  diceThree: 0,
  diceFour: 0,
  gameIsOver: false
};

function calculateScore(scoreOne: number, scoreTwo: number): number {
  const score = scoreOne - scoreTwo;

  if (score >= 0) {
    return score;
  } else {
    return 0;
  }
}

function updateDiceScore(
  state: GameState,
  dice: string,
  diceRoll: number
): GameState {
  const newState: GameState = {
    ...state,
    [dice]: diceRoll
  };

  return newState;
}

type Action = {
  type: string;
  [payload: string]: any;
};

export const reducer = (
  state: GameState = initialState,
  action: Action
): GameState => {
  switch (action.type) {
    case PLAYER_ONE_HIT:
      return {
        ...state,
        playerOneScore: calculateScore(state.playerOneScore, action.payload)
      };
    case PLAYER_TWO_HIT:
      return {
        ...state,
        playerTwoScore: calculateScore(state.playerTwoScore, action.payload)
      };
    case DICE_ONE:
      return updateDiceScore(state, "diceOne", action.payload);
    case DICE_TWO:
      return updateDiceScore(state, "diceTwo", action.payload);
    case DICE_THREE:
      return updateDiceScore(state, "diceThree", action.payload);
    case DICE_FOUR:
      return updateDiceScore(state, "diceFour", action.payload);
    case GAME_OVER:
      return {
        ...state,
        gameIsOver: true
      };
    case RESTART:
      return initialState;

    default:
      return state;
  }
};
