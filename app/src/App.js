import AdditionModule from "./Components/AdditionModule";
import DivisionModule from "./Components/DivisionModule";
import MultiplicationModule from "./Components/MultiplicationModule";
import SubtractionModule from "./Components/SubtractionModule";
import "./index.css";

function App() {
  return (
    <div className="">
      <AdditionModule />
      <SubtractionModule />
      <MultiplicationModule />
      <DivisionModule />
    </div>
  );
}

export default App;
