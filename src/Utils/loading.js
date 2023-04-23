import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <ReactLoading
    className='loading'
    type={type}
    color={color}
    height={"10%"}
    width={"15%"}
  />
);

export default Loading;
