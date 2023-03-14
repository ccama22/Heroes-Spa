import React from "react";
import { HeroList } from "../components";
import { useLocation } from "react-router-dom";

export const MarvelPage = () => {
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      <h1>MarvelPage</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
};
