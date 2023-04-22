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
      <div className='d-flex'>
        <Link to='/convertitore'>
          <button>Convertitore</button>
        </Link>
        <Link to='/meteo'>
          <button className='mx-2'>Meteo</button>
        </Link>
        <Link to='/tasklist'>
          <button className='mx-3'>Tasklist</button>
        </Link>
        <Link to='/registration'>
          <button className='mx-4'>Registrazione</button>
        </Link>
      </div>
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
      <BackButton goto={"/"} myimg={logOutImg} />
    </div>
  );
};

export default Homepage;
