import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logOutImg from "../../src/Utils/media/logout.png";
import TridentLogo from "../Utils/media/trident.png";
import BackButton from "../Utils/backBtn";
import Button from "../Library/Button";
import LoggedUser from "../Utils/loggedUser";
import { ReducerContext } from "./Reducer/wrapper";

const Homepage = () => {
  const [state, dispatch] = useContext(ReducerContext);

  const handleClick = () => {
    dispatch({
      type: "SET_AUTH",
      payload: false,
    });
    localStorage.removeItem("currentUserData");
  };
  return (
    <div
      className='d-flex align-items-center justify-content-center flex-column'
      style={{ height: "100vh" }}
    >
      <img src={TridentLogo} alt='Logo' />
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
      <BackButton
        goto={"/"}
        myimg={logOutImg}
        handleClick={handleClick}
        text='Logout'
      />
      <LoggedUser />
    </div>
  );
};

export default Homepage;
