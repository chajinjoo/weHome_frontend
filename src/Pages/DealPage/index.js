import React from "react";
import Nav from "../../Component/Nav/Nav";
import DealPageTitle from "./DealPageTitle/DealPageTitle";
import DealMainPage from "./DealMainPage/DealMainPage";

export default function DealPage() {
  return (
    <>
      <Nav />
      <DealPageTitle />
      <DealMainPage />
    </>
  );
}
