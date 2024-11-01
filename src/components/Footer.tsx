"use client";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  padding-block: 30px;
  background-color: black;
  color: white;
  position: sticky;
  bottom: 0;
  left: 0;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Footer = () => {
  return <StyledFooter>Some company 2024</StyledFooter>;
};

export default Footer;
