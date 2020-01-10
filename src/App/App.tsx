import React from "react";
import Arena from "../Arena/Arena";
import styles from "./App.module.scss";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Battle Simulator</h1>
      <Arena />
    </main>
  );
};

export default App;
