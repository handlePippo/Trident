import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logOutImg from "../../src/Utils/media/logout.png";
import TridentLogo from "../Utils/media/trident.png";
import BackButton from "../Utils/backBtn";
import Button from "../Library/Button";
import { AuthContext } from "../App";

const Homepage = () => {
  const { setAuth } = useContext(AuthContext);

  const handleClick = () => {
    setAuth(false);
  };
  return (
    <div
      className='d-flex align-items-center justify-content-center flex-column'
      style={{ height: "100vh" }}
    >
      <img src={TridentLogo}></img>

      <div className='d-flex mb-5 '>
        <Link to='/convertitore'>
          <Button name='Convertitore' />
        </Link>
        <Link to='/meteo'>
          <Button name='Meteo' />
        </Link>
        <Link to='/tasklist'>
          <Button name='TaskList' />
        </Link>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h4>Test per Trident Suisse</h4>
        <h6>by Filippo Palliani</h6>
        <Button name='Portfolio' portfolio={true} />
      </div>
      <BackButton goto={"/"} myimg={logOutImg} handleClick={handleClick} />
    </div>
  );
};

export default Homepage;
