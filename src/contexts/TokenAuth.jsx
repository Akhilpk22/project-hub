import React, { createContext, useState } from "react";
export const tokenAuthorisationContext = createContext();

function TokenAuth({ children }) {
  const [isAuthorized, setisAuthorized] = useState(false);
  return (
    <>
      <tokenAuthorisationContext.Provider value={{ isAuthorized, setisAuthorized }}>
        {children}
      </tokenAuthorisationContext.Provider>
    </>
  );
}

export default TokenAuth;
