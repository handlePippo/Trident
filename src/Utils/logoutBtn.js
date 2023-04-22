import React from "react";
import logOutImg from "./media/logout.png";
import { Link } from "react-router-dom";

const LogOutBtn = () => {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, padding: 25 }}>
      <Link to='/'>
        <img
          src={logOutImg}
          alt='Torna alla schermata di log-in'
          style={{ height: "75px", width: "75px" }}
          className='d-flex justify-content-start position-absolute align-items-start'
        />
      </Link>
    </div>
  );
};

export default LogOutBtn;
