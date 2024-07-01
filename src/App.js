import "./App.css";
import MenuBar from "./components/MenuBar";
import SpinArea from "./components/SpinArea";
import RedBox from "./components/RedBox";
import SpinButton from "./components/SpinButton";

function App() {
   return (
      <div className="AppMain">
         <MenuBar />
         <SpinButton />
         <SpinArea />
         <RedBox />
      </div>
   );
}

export default App;
