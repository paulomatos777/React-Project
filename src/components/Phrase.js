import styles from "./Phrase.module.css";

function Phrase() {
  return (
    <div className={styles.phraseContainer}>
      <p className={styles.phraseContent}>Este é um componente com uma frase</p>
    </div>
  );
}

export default Phrase;
