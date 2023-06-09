import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateHealthTip from "./components/CreateHealthTip";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Header></Header>

          <Header></Header>
          <Routes>
            <Route
              path="/add-health-tip"
              element={<CreateHealthTip></CreateHealthTip>}
            ></Route>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
