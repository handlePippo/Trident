import React from "react";
import "./index.scss";

const Button = ({
  isDisabled,
  handleClick,
  name,
  type = "button",
  portfolio = false,
}) => {
  return (
    <div className='container'>
      <button type={type} disabled={isDisabled} onClick={handleClick}>
        {portfolio ? (
          <a
            href='https://filippopalliani.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            {name}
          </a>
        ) : (
          name
        )}
      </button>
    </div>
  );
};

export default Button;
