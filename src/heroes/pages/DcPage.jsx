import React from "react";
import { useLocation } from "react-router-dom";
import { HeroList } from "../components";

export const DcPage = () => {
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      <h1>DcPage</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </>
  );
};
