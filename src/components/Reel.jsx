import img1 from "../images/apple.jpg";
import img2 from "../images/banana.jpg";
import img3 from "../images/bell.jpg";
import img4 from "../images/blueberry.jpg";
import img5 from "../images/cherry.jpg";
import img6 from "../images/lemon.jpg";
import img7 from "../images/orange.png";
import img8 from "../images/pear.jpg";
import img9 from "../images/pineapple.jpg";
import img10 from "../images/strawberry.jpg";
import img11 from "../images/watermelon.jpg";
import img12 from "../images/grapes.jpg";
import "./Reel.css";

const images = [
   img1,
   img2,
   img3,
   img4,
   img5,
   img6,
   img7,
   img8,
   img9,
   img10,
   img11,
   img12,
];

function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }
}

let shuffledImages = shuffleArray(images);

let num1, num2, num3;

function getRandomInt(max) {
   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   return Math.floor(Math.random() * max);
}

//chatgpt.com/c/b95664b5-a4e8-4e3a-b8d0-fb8f124a0b0c

num1 = getRandomInt(12);
num2 = num1 + 1;
num3 = num1 + 2;
if ((num1 = 10)) {
   num2 = 11;
   num3 = 0;
} else if ((num1 = 11)) {
   num2 = 0;
   num3 = 1;
}

function Reel(props) {
   return (
      <div>
         <img src={images[0]} alt="casino reel symbol" />
         <img src={images[1]} alt="casino reel symbol" />
         <img src={images[2]} alt="casino reel symbol" />
      </div>
   );
}

export default Reel;
