import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Wanderer from "./wanderer";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Routes>
            <Route path="/*" element={<Wanderer/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
