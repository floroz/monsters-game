import React from "react";
import styles from "./Controls.module.scss";

interface Props {
  onAttack: () => void;
}

const Controls: React.FC<Props> = ({ onAttack }) => {
  return (
    <div>
      <h1>Test</h1>
      <button onClick={onAttack}>Attack!</button>
    </div>
  );
};

export default Controls;
