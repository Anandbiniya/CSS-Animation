import React from "react";
//conditional rendering

const UserGreeting = () => {
  const isLoggedIn = false;
  //this is terinary approach
  return <div>Welcome{isLoggedIn && "amith"}</div>;
};
//short circuit approach

export default UserGreeting;
