import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/team.scss";
import { team } from "../assests/data";
import { AiOutlineTwitter } from "react-icons/ai";

const Teams = () => {
  const [item, setItem] = useState(1);
  const [padding, setPadding] = useState(40);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    sliderResponsive();
  }, [item]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function sliderResponsive() {
    if (window.innerWidth > 1000) {
      setItem(4);
    }
    if (window.innerWidth < 1000) {
      setItem(3);
    }
    if (window.innerWidth < 780) {
      setItem(2);
    }
    if (window.innerWidth < 520) {
      setItem(1);
      setPadding(70);
    }
  }
  useEffect(() => {
    sliderResponsive();
  }, []);
  window.addEventListener("resize", () => {
    // sliderResponsive();
  });

  return (
    <>
      <section id="team" className="team">
        <div className="container">
          <div className="heading" style={{textAlign:'center'}}>
         
              <img
                src="/images/team.png"
                style={{ maxWidth: "300px", width: "95%" }}
                alt=""
              />
        
          </div>
          <div className="team__grid">
            {team.map((ite, ind) => {
              return (
                <a
                  target={"_blank"}
                  href={ite.link}
                  data-aos="fade-up"
                  data-aos-delay={150 * ind}
                  data-aos-easing="ease-out"
                >
                  <div key={ind} className="item">
                    <div className="inner">
                      <div className="img">
                        <img src={ite.path} alt="" />
                        <a href="" target={"_blank"}>
                          <AiOutlineTwitter />
                        </a>
                      </div>
                      <div className="detail">
                        <h2 className="name">{ite.name}</h2>
                        <h4>{ite.position}</h4>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
