import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router";

export const Nav = () => {
  const getWidth = (pathNeeded) => {
    const isSmall = window.matchMedia("(max-width:1300px)").matches;

    if (pathname == pathNeeded) {
      if (isSmall) {
        return "100%";
      } else {
        return "50%";
      }
    } else {
      console.log(pathNeeded);
      console.log(isSmall);
      return "0%";
    }
  };
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="Logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{
              width: getWidth("/"),
            }}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{
              width: getWidth("/work"),
            }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{
              width: getWidth("/contact"),
            }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 100;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    padding-right: 2rem;
  }
  #Logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem 1rem;

    #Logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 1rem 0rem 0rem 0rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  position: absolute;
  bottom: -50%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;
