import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import './components/style.css';
function App(props) {
  return (
    <div className="App" >
      <NavBar></NavBar>
      <News pageSize = {8} country="in" category="general"></News>

    </div>
  );
}

export default App;
