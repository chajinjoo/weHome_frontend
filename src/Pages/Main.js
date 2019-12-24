import React from "react";
import "../Pages/Main.scss";
import Nav from "../components/Nav/Nav";
import MainHeader from "../components/MainHeader/MainHeader";
import Manuicon from "../components/Menuicon/Menuicon";

function Main() {
  return (
    <div>
      <Nav />
      <MainHeader />
      <Manuicon />
      {/* <h1>하하하하하하하 우리는 위홈</h1> */}
    </div>
  );
}

export default Main;
