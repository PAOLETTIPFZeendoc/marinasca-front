import React from "react";
import { Link } from "react-router-dom";
import ImageElement from "../ImageElement/ImageElement";
import Loginbutton from "../LoginButton/LoginButton";
import { HeaderContainer } from "./header.style";
import logo from "../../assets/images/logoMarinasca.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Link
        to='/'
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ImageElement
          width='60px'
          image={logo}
          alt={"logo la marinasca"}
        />
      </Link>
      <Loginbutton />
    </HeaderContainer>
  );
};

export default Header;
