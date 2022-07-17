import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/info.scss";

const Info = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
    });
  }, []);

  return (
    <>
      <section id="info" className="info">
        <div className="container">
          <div className="info__grid">
            <div className="start">
              <h2>
                <span
                  style={{
                    fontSize: "4rem",
                    marginBottom: "15px",
                    fontWeight: "900",
                    color: "#ffcf00",
                  }}
                >
                  MINT
                </span>{" "}
                <span
                  style={{
                    fontSize: "4rem",
                    marginBottom: "15px",
                    fontWeight: "900",
                  }}
                >
                  INFORMATION!
                </span>
              </h2>
              <ul>
                <li>1000 - free</li>
                <li>1000 - 0.001 eth</li>
                <li>1000 - 0.002 eth</li>
                <li>1000 - 0.003 eth</li>
                <li>1000 - 0.004 eth</li>
              </ul>
            </div>
            <div className="end">
              <div className="img">
                <img src="/images/sec.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
