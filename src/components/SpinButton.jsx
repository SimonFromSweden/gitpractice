import "./SpinButton.css";
// import Button from "react-bootstrap/Button";

function SpinButton() {
   function handleClick() {
      let num1;
      let num2;
      let num3;

      function getRandomInt(max) {
         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
         return Math.floor(Math.random() * max);
      }

      num1 = getRandomInt(12);
      num2 = getRandomInt(12);
      num3 = getRandomInt(12);

      if (num1 === num2 && num2 === num3) {
         alert("You win!");
      }
   }
   return <button onClick={handleClick}>SPIN!</button>;
}

export default SpinButton;
