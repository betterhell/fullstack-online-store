import React from "react";
import UpperHeader from "./UpperHeader/UpperHeader";
import MiddleHeader from "./MiddleHeader/MiddleHeader";
import LowerHeader from "./LowerHeader/LowerHeader";

const Header = () => {
  return (
    <div>
      <UpperHeader />
      <MiddleHeader />
      <LowerHeader />
    </div>
  );
};

export default Header;
