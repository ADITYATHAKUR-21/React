import React from "react";
import UserContext from "./Context";

const UserContextProvider = ({ Children }) => {
  const { data, setData } = React.useState();

  return (
    <UserContextProvider value={{ data, setData }}>
      {Children}

    </UserContextProvider>
  )

}


export default UserContextProvider;
