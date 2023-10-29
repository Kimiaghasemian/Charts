import Barchart from "../src/components/barchart";
import "./App.css";
import Donut from "./components/Donut";
import Table from "./components/table";

function App() {
  return (
    <>
      <Barchart />
      <hr/>
      <Table />
      <hr/>
      <Donut/>
    </>
  );
}

export default App;
