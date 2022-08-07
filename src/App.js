import "./App.css";
import Navbar from "./Navbar";
import Summary from "./Summary";
import Menu from "./Menu";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="Main">
        <Summary />
        <Menu />
      </div>
    </>
  );
}

export default App;
