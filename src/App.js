import React, { useState } from "react";

//import { Toggle } from "./components/Toogle";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    // <div className="App" data-theme={isDark ? "dark" : "light"}>
    //   <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    //   <h1 className="title">Hello world!</h1>
    //   <div className="box">
    //     <h2>This is a box</h2>
    //   </div>
    // </div>
    <>
      <div className="bd" data-theme={true ? "dark" : "light"}>
        <div className="container">
          <div className="containerOne">
            <h2>Hello Dark Mode</h2>
          </div>
          <div className="containerTwo">
            <p>Let's switch color</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
