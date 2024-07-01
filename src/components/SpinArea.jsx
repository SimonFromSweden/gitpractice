import Reel from "./Reel";
import "./SpinArea.css";

function SpinArea() {
   return (
      <div className="spinDiv">
         <div id="reel1">
            <Reel />
         </div>
         <div id="reel2">
            <Reel />
         </div>
         <div id="reel3">
            <Reel />
         </div>
      </div>
   );
}

export default SpinArea;
