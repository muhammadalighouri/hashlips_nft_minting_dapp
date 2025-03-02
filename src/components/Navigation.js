import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { nav } from "../assests/data";
import "../scss/navigation.scss";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaRedditAlien } from "react-icons/fa";
import { BiChevronUp } from "react-icons/bi/";
const Navigation = ({ dispatch, getData, connect }) => {
  const [navToggler, setNavToggler] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [scroll, setScroll] = useState(false);

  function mobilenav() {
    if (window.innerWidth > 991) {
      return "greater";
    }
  }
  mobilenav();

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    if (window.scrollY >= 70) {
      setNavColor(true);
    } else {
      setNavColor(false);
      setNavToggler(false);
    }
  });

  function barBtn() {
    setNavToggler(!navToggler);
    setNavColor(!navColor);
  }

  const links = [
    {
      name: "etherscan",
      link: "https://etherscan.io/address/0xF9616e049CF8a71cfC4a1AfBa92Fd94c770a71c8",
    },
   
    {
      name: "twitter",
      link: "https://twitter.com/cryptotorosfus",
    },
    {
      name: "opensea",
      link: "https://opensea.io/collection/crypto-toros",
    },
  ];

  return (
    <>
      <header className={navToggler ? "nav__active" : ""}>
        <div className="outer">
          <div className="container">
            <div className="nav__grid">
              <div className="logo">
                <a href="">
                  <img
                    src={
                      window.innerWidth > "600px"
                        ? "/images/navlogo.png"
                        : "/images/-logo.png"
                    }
                    alt=""
                  />
                </a>
              </div>
              <nav style={{ right: navToggler ? 0 : "-100%" }}>
                <ul>
                  {nav.map((ite, ind) => {
                    return (
                      <li key={ind}>
                        <a href={ite.path}>{ite.name}</a>
                      </li>
                    );
                  })}

                  {/* <li className="nav__links">
                    <a href="https://discord.gg/qTYfExSXZR"  target="_blank">
                      <FaDiscord  />
                    </a>
                    <a
                      href=" https://twitter.com/Crypto Toros"
                      target="_blank"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li> */}
                </ul>
              </nav>
              <div className="nav__btns">
                {links.map((item, i) => {
                  return (
                    <a href={item.link} target="_blank">
                      <img
                        className={item.name}
                        src={`/images/${item.name}.png`}
                        alt=""
                      />
                    </a>
                  );
                })}

                {/* <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }}
                >
                  {" "}
                  connet
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        onClick={() => window.scroll(0, 0)}
        className="auto_scroll"
        style={scroll ? { transform: "scale(1)" } : {}}
      >
        <BiChevronUp />
      </div>
    </>
  );
};

export default Navigation;
