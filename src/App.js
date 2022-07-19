import React, { useState, useEffect, useRef } from "react";
import "./scss/normalize.css";
import Banner from "./components/Banner";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Teams from "./components/Teams";
import Info from "./components/Info";
import "./scss/reset.css";
import AboutNft from "./components/AboutNft";

import Main from "./Main";
var Spinner = require("react-spinkit");
function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#fff");
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div
      // style={{
      //   backgroundImage: 'url("/images/main-image.png")',
      //   backgroundSize: "contain",
      //   width: "100%",
      //   height: "100%",
      //   backgroundRepeat: "no-repeat",
      // }}
      >

        <Main />
        <main>
          <div
            style={{
              display: loading ? "grid" : "none",
              placeContent: "center",
              height: "100vh",
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              background: "#c8c7f6",
              zIndex: "10000",
            }}
            className="spin"
          >
            <Spinner
              name="three-bounce"
              style={{ transform: "scale(1)" }}
              color="red"
            />
          </div>

          <AboutNft />
          <Info />
          <Roadmap />

          <Teams />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
