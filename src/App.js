import React from "react";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
//import Pages
import AboutUS from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUS />
    </div>
  );
}

export default App;
