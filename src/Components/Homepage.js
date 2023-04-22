import React from "react";
import { Link } from "react-router-dom";
import logOutImg from "../../src/Utils/media/logout.png";
import BackButton from "../Utils/backBtn";

const Homepage = () => {
  return (
    <div
      className='d-flex align-items-center justify-content-center flex-column'
      style={{ height: "100vh" }}
    >
      <h1>Homepage</h1>
      <div className='d-flex mb-5 '>
        <Link to='/convertitore'>
          <button>Convertitore</button>
        </Link>
        <Link to='/meteo'>
          <button className='mx-2'>Meteo</button>
        </Link>
        <Link to='/tasklist'>
          <button className='mx-3'>Tasklist</button>
        </Link>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h4>Test per Trident Suisse</h4>
        <h6>Filippo Palliani</h6>
        <button style={{ maxWidth: "11vw" }}>
          <a
            className='portfolio'
            href='https://filippopalliani.netlify.app/'
            target='blank'
          >
            Portfolio Personale
          </a>
        </button>
      </div>
      <BackButton goto={"/"} myimg={logOutImg} />
    </div>
  );
};

export default Homepage;
