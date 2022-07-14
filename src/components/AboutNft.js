import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/aboutnft.scss";

const AboutNft = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
    });
  }, []);

  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="about__grid">
            <div
              className="img"
              data-aos="zoom-out-right"
              data-aos-delay="300"
              data-aos-easing="ease-out"
            >
              <figure>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                  (item, i) => {
                    return <img src={`/images/nft/${item}.png`} alt="" />;
                  }
                )}
              </figure>
            </div>
            <div className="details" >
             
              <img
                src="/images/name.png"
                style={{ maxWidth: "600px", width: "95%" }}
                alt=""
              />

              <p data-aos="zoom-out-up" data-aos-delay="300">
                Crypto Toros is a collection of 10,000 uniquely beautiful cat
                NFTs that thrive on the ethereum blockchain. With aspirations of
                metaverse integration and implementation of practical holder
                utilities, our team at Crypto Toros is focused on advancing not
                only the community, but also testing the limits of technology
                and artistic freedoms within Web3. Through our project, our
                Crypto Toros team firstly aims to create an inclusive and
                refreshing community where people can create their own Crypto
                Toros story, make new friendships, create new connections, and
                explore new pieces of the metaverse in unity. By building a
                space for our community and hosting interactive events to
                inspire enthusiasm and excitement in tandem, we will do our best
                to bring smiles to all Crypto Toros members.
              </p>
              <a
                data-aos="zoom-out-up"
                data-aos-delay="300"
                style={{ display: "inline-block" }}
                href=" https://twitter.com/Crypto Toros"
                target={"_blank"}
              >
                <button>Join Community!</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutNft;
