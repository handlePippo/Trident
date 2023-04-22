import React, { useContext } from "react";
import backBtnImg from "./media/backbtn.png";
import { Link } from "react-router-dom";

const BackButton = ({
  handleClick,
  goto = "/homepage",
  myimg = backBtnImg,
}) => {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, padding: 25 }}>
      <Link to={goto}>
        <img
          src={myimg}
          alt='Torna alla Home'
          style={{ height: "75px", width: "75px" }}
          className='d-flex justify-content-start position-absolute align-items-start'
          onClick={handleClick}
        />
      </Link>
    </div>
  );
};

export default BackButton;
