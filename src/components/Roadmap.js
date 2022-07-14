import React, { useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/roadmap.scss";
import { roadmap } from "../assests/data";
import Navigation from "./Navigation";

const Roadmap = () => {
  return (
    <>
      <section id="roadmap" className="roadmap">
        <div className="heading" style={{textAlign:'center'}}>
          <img
            src="/images/roadmap.png"
            style={{ maxWidth: "450px", width: "95%" }}
            alt=""
          />
        </div>
        <div className="container">
          <div className="roadmap__grid">
            {roadmap.map((item, i) => {
              return (
                <div
                  key={i}
                  className="wrapper"
                  data-aos={2 % i == 0 ? "fade-up" : "fade-up"}
                  data-aos-delay="300"
                  data-aos-easing="ease-out"
                >
                  <div className="item">
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
