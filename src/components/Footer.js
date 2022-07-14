import React from "react";
import "../scss/footer.scss";
import { AiFillYoutube } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div className="logo">
            <a href="">
              <img src="/images/logo.png" alt="" />
            </a>
          </div>
          <p>
            &copy; Copyright 2022 All rights Reserved to{" "}
            <span>www.cryptotoros.xyz</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
