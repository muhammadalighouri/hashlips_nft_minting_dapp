import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import "./scss/app.scss";
import Marquee from "react-easy-marquee";
import Navigation from "./components/Navigation";
var Spinner = require("react-spinkit");
const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function Main() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW 😍, the ${CONFIG.NFT_NAME} is yours! `
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);
  const [final, setFinal] = useState(
    new Date("July 19, 2022 11:00:00").getTime()
  );
  const [check, setcheck] = useState(null);
  const [play, setplay] = useState(true);
  const [sec, setSec] = useState(null);
  const [min, setMin] = useState(null);
  const [hour, setHour] = useState(null);
  const [day, setDay] = useState(null);
  const [reveal, setreveal] = useState(false);
  console.log(check);
  if (play) {
    setInterval(
      () => {
        let now = new Date().getTime();

        let distance = final - now;

        setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHour(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMin(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSec(Math.floor((distance % (1000 * 60)) / 1000));
        if (distance <= 0) {
          setreveal(true);
        }
      },

      1000
    );
  }
  const date = [
    {
      name: "day",
      value: day,
    },
    {
      name: "hour",
      value: hour,
    },
    {
      name: "min",
      value: min,
    },
    {
      name: "sec",
      value: sec,
    },
  ];
  // write a loop to run 10 times
  // getData();
  return (
    <>
      <div className="main__wrapper">
        <Navigation dispatch={dispatch} getData={getData} connect={connect} />

        <div className="main__container">
          <div className="grid">
            <div className="middle">
              <div className="wrapper">
                <div className="logo">
                  <img src="/images/gif.gif" alt="" />
                </div>
                {!reveal ? (
                  <div className="bottom">
                    <h2
                      style={{
                        marginTop: "20px",
                        fontSize: "3rem",
                        fontWeight: "900",
                        fontFamily: "'Staatliches'",
                      }}
                    >
                      MINT WILL START IN!
                    </h2>
                    <div
                      className="date"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        placeItems: "center",
                        gap: "5px",
                        marginTop: "10px",
                        background: "#387fe2",
                        padding: "10px",
                        borderRadius: "12px",
                        boxShadow:
                          "0 1px 1px #00000014, 0 2px 2px #00000014, 0 4px 4px #00000014, 0 8px 8px #00000014, 0 0 10px #00000014",
                        border: "3px solid #a5d6ff",
                      }}
                    >
                      {date.map((item, i) => {
                        return (
                          <div key={i} className="date__item">
                            <div
                              style={{
                                fontSize: "clamp(2rem, 5vw, 2.5rem)",
                                textTransform: "uppercase",
                                fontFamily: "'Staatliches'",
                              }}
                              className="date__item__text"
                            >
                              {item.name}
                            </div>
                            <div
                              className="date__item__number"
                              style={{
                                fontSize: "clamp(2rem, 5vw, 2.5rem)",
                                marginTop: "10px",
                                fontFamily: "'Staatliches'",
                              }}
                            >
                              {item.value}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2
                      style={{
                        fontFamily: "VT323, monospace",
                        fontSize: "3.5rem",
                        marginTop: "6px",
                        lineHeight: "1",
                        fontWeight: "500",
                        marginBottom: "-8px",
                      }}
                    >
                      MINT IS LIVE!
                    </h2>
                    <div
                      className="supply"
                      style={{
                        textAlign: "center",
                        fontSize: "3.5rem",
                        marginBottom: "0px",
                        fontFamily: "VT323, monospace",
                        lineHeight: "1",
                        fontWeight: "500",
                      }}
                    >
                      {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                    </div>

                    {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                      <div className="end">
                        <p>The sale has ended.</p>
                        <p>You can still find {CONFIG.NFT_NAME} on</p>

                        <a target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                          {CONFIG.MARKETPLACE}
                        </a>
                      </div>
                    ) : (
                      <>
                        <h2
                          style={{
                            fontFamily: "VT323, monospace",
                            fontWeight: "500",
                            fontSize: "2rem",
                            lineHeight: "1",
                            marginBottom: "8px",
                          }}
                        >
                          1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                          {CONFIG.NETWORK.SYMBOL} + GAS.
                        </h2>

                        {blockchain.account === "" ||
                        blockchain.smartContract === null ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              flexDirection: "column",
                            }}
                          >
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(connect());
                                getData();
                              }}
                              style={{
                                fontFamily: "VT323, monospace",
                                width: "95%",
                                margin: "0px auto 10px",
                                background: "rgb(56 127 226)",
                                outline: "none",
                                border: "0px",
                                padding: "10px",
                                borderRadius: "5px",
                                boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 4px",
                                color: "rgb(255, 255, 255)",
                                fontWeight: "bold",
                                cursor: "pointer",
                                lineHeight: "1",
                                fontSize: "2rem",
                              }}
                            >
                              CONNECT WALLET
                            </button>
                            <p
                              style={{
                                textAlign: "center",
                                marginBottom: "10px",
                                fontFamily: "VT323, monospace",
                                fontSize: "2rem",

                                lineHeight: "1",
                              }}
                            >
                              Connect to the {CONFIG.NETWORK.NAME} network
                            </p>
                            {blockchain.errorMsg !== "" ? (
                              <>
                                <p>{blockchain.errorMsg}</p>
                              </>
                            ) : null}
                          </div>
                        ) : (
                          <>
                            <p
                              style={{
                                fontFamily: 'VT323, monospace',
                                fontWeight: '500',
                                fontSize: '2rem',
                                lineHeight: '1',
                                marginBottom: '8px',
                                marginTop: '-10px'
                              }}
                            >
                              {" "}
                              {feedback}
                            </p>
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 3fr 1fr",
                              }}
                            >
                              <button
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  decrementMintAmount();
                                }}
                                style={{
                                  height: "52px",
                                  background: "rgb(56 127 226)",
                                  border: "0",
                                  marginBottom: "5px",
                                  borderRadius: "6px",
                                  fontSize: "3rem",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: "52px",
                                  cursor: "pointer",
                                }}
                              >
                                -
                              </button>

                              <p>{mintAmount}</p>

                              <button
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  incrementMintAmount();
                                }}
                                style={{
                                  height: "52px",
                                  background: "rgb(56 127 226)",
                                  border: "0px",
                                  marginBottom: "5px",
                                  borderRadius: "6px",
                                  fontSize: "3rem",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontFamily: "Raleway",
                                  width: "52px",
                                  cursor: "pointer",
                                  justifySelf: "end",
                                }}
                              >
                                +
                              </button>
                            </div>
                            <div>
                              <button
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  claimNFTs();
                                  getData();
                                }}
                                style={{
                                  fontFamily: "VT323, monospace",
                                  width: "100%",
                                  margin: "0px auto 10px",
                                  background: "rgb(56, 127, 226)",
                                  outline: "none",
                                  border: "0px",
                                  padding: "10px",
                                  borderRadius: "5px",
                                  boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 4px",
                                  color: "rgb(255, 255, 255)",
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  lineHeight: "1",
                                  fontSize: "2rem",
                                  height: "52px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {claimingNft ? (
                                  <Spinner
                                    name="three-bounce"
                                    style={{
                                      transform: "scale(1)",
                                      display: "flex",
                                    }}
                                    color="red"
                                  />
                                ) : (
                                  "MINT NOW!"
                                )}
                              </button>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mar">
        <Marquee
          duration={500000}
          style={{
            background:
              "linear-gradient(91.44deg, #0A0823 44.25%, #07051C 106.1%)",
            borderTop: "1px solid #2E215A",
            borderBottom: "1px solid #2E215A",
            padding: "20px 0px",
          }}
          background="transparent "
          height="70px"
        >
          {
            //  write code to run the loop map loop 10 times
            [1, 2, 3, 3, 3, 3, 3, 3, , 3, 3, 3, 3, 3, 3, 3, 3].map((ite, i) => {
              return (
                <h1
                  style={{
                    fontWeight: "900",
                    fontSize: "20px",
                    textTransform: "uppercase",
                    fontFamily: "Pixeled",
                    margin: "0px 10px",
                    height: "52px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "-4px",
                  }}
                >
                  MINT DATE 10 JULY!
                </h1>
              );
            })
          }
        </Marquee>
      </div>
    </>
  );
}

export default Main;
