"use client";
import styled from "styled-components";
import MaxWContainer from "./MaxWContainer";
import Link from "next/link";
import { Button } from "@mui/material";

const StyledHeader = styled.header`
  background-color: black;
  color: white;
  position: sticky;
  top: 0;
  left: 0;
  font-size: 1.5rem;
  z-index: 10;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <MaxWContainer paddingBlock={"1rem"} isFlex alignItems="center" justifyContent="space-between">
        <Link href={"/"}>Some Company</Link>
        <Button variant="contained" color="secondary" component={Link} href="/contact">
          Contact Us
        </Button>
      </MaxWContainer>
    </StyledHeader>
  );
};

export default Header;
