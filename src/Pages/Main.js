import React from "react";
import "../Pages/Main.scss";
import Nav from "../Components/Nav/Nav";
import MainHeader from "../Components/MainHeader/MainHeader";
import Manuicon from "../Components/Menuicon/Menuicon";
import Footer from "../Components/Footer/Footer";

function Main() {
  return (
    <div>
      <Nav />
      <MainHeader />
      <Manuicon />
      <Footer />
      {/* <h1>하하하하하하하 우리는 위홈</h1> */}
    </div>
  );
}

export default Main;
