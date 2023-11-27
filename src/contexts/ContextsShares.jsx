import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const addProjectResponseContext = createContext();
export const editProjectResponseContext = createContext();

function ContextsShares({ children }) {
  const [addProjectResponse, setaddProjectResponse] = useState({});
  const [editProjectResponse, seteditProjectResponse] = useState({});

  return (
    <>
      <addProjectResponseContext.Provider
        value={{ addProjectResponse, setaddProjectResponse }}
      >
        <editProjectResponseContext.Provider
          value={{ editProjectResponse, seteditProjectResponse }}
        >
          {children}
        </editProjectResponseContext.Provider>
      </addProjectResponseContext.Provider>
    </>
  );
}

export default ContextsShares;
