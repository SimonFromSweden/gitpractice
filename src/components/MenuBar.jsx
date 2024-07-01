import imgSrc from "../images/logo.jpg";
import "./MenuBar.css";

function MenuBar() {
   return (
      <div>
         <img src={imgSrc} alt="casino logo" />
         <h2>Spin To Win</h2>
      </div>
   );
}

export default MenuBar;
