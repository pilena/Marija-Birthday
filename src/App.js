import "./styles.css";

import Card from "./Card";
import JSConfetti from 'js-confetti'

export default function App() {
  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti({
   emojis: ['👑', '⚡️', '💥', '✨', '💫', '🌸', '💸'],
  })
  jsConfetti.addConfetti({
    confettiColors: [
      '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
    ],
  })
  
  jsConfetti.addConfetti()
  return (
    <div className="App">
      <Card />
    </div>
  );
}
