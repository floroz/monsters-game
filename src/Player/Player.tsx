import React from "react";

interface Props {
  score: number;
}

const Player: React.FC<Props> = ({ score }) => {
  return (
    <div>
      <h1>{score}</h1>
    </div>
  );
};

export default Player;
