import "./styles.css";

import Card from "./Card";
import JSConfetti from 'js-confetti'

export default function App() {
  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti()
  return (
    <div className="App">
      <Card />
    </div>
  );
}
