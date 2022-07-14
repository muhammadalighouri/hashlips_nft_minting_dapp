import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/info.scss";

const AboutNft = () => {
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
            <div className="img" data-aos="zoom-out-right"
              data-aos-delay="300"
              data-aos-easing="ease-out">
              <figure>
            
              </figure>
            </div>
            <div
              className="details"
              
            >
              <div>
              
              
              </div>
              <p data-aos='zoom-out-up' data-aos-delay='300'>
              Crypto Toros is a collection of 10,000 uniquely beautiful cat NFTs that thrive on the ethereum blockchain. With aspirations of metaverse integration and implementation of practical holder utilities, our team at Crypto Toros is focused on advancing not only the community, but also testing the limits of technology and artistic freedoms within Web3.
              </p>
           
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutNft;
