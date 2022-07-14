import React, { useEffect, useRef ,useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/banner.scss";
import { BannerImages,collection,collection2,collection4,collection3 } from "../assests/data";
import AboutNft from "./AboutNft";
import Navigation from "./Navigation";
import Marquee from "react-easy-marquee";
import { AiOutlineTwitter } from "react-icons/ai";
import dataReducer from "../redux/data/dataReducer";




const Banner = () => {
  const [img, setimg] = useState('/images/nft/1-.png')
  useEffect(() => {
    AOS.init({});
  }, []);
// write a function that generate a random number between 1 and 20 after 1 second
  const randomNumber = () => {      
    setTimeout(() => {
      let random = Math.floor(Math.random() * 20) + 0;
      setimg(BannerImages[random])
      randomNumber()
    }, 1000);
  }
  useEffect(() => {
    randomNumber()
  }
  , [])



  return (
    <>

      <section className="banner">
        <div className="images">
          <Marquee className="mark" duration={60000} height="200px">
            <div className="img__grid">
              {collection.map((item, i) => {
                return <img key={i} src={item} alt="" />;
              })}
            </div>
          </Marquee>
          <Marquee
            className="mark"
            duration={60000}
            height="200px"
            reverse={true}
          >
            <div className="img__grid">
              {collection2.map((item, i) => {
                return <img key={i} src={item} alt="" />;
              })}
            </div>
          </Marquee>
          <Marquee className="mark" height="200px" duration={60000}>
            <div className="img__grid">
              {collection3.map((item, i) => {
                return <img key={i} src={item} alt="" />;
              })}
            </div>
          </Marquee>
          <Marquee className="mark" height="200px" duration={60000}>
            <div className="img__grid">
              {collection4.map((item, i) => {
                return <img key={i} src={item} alt="" />;
              })}
            </div>
          </Marquee>
        </div>
        {/* <div className="container">
          <div className="grid">
            <div className="start">
              <h1>
                <img src="/images/logo.png" alt="" />
              </h1>
              <p>A powerful breed of cats are about to land into web3</p>
              <div className="btns">
                <a href=" https://twitter.com/Crypto Toros" target={"_blank"}>
                  {" "}
                  <button className="first"> <AiOutlineTwitter /> Follow us</button>
                </a>
                <a href="" target={"_blank"}>
                  {" "}
                  <button className="second">Buy Now</button>
                </a>
              </div>
            </div>
            <div className="end">
              <div className="img">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div> */}
      </section>{" "}
    </>
  );
};

export default Banner;
