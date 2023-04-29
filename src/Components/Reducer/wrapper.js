import React, { createContext, useReducer } from "react";
import App from "../../App";
import { initialState, reducer } from ".";

export const ReducerContext = createContext(null);

const Wrapper = () => {
  return (
    <ReducerContext.Provider value={useReducer(reducer, initialState)}>
      <App />
    </ReducerContext.Provider>
  );
};

export default Wrapper;
