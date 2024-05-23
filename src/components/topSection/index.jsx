import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #1756dd32;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 80px;  
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  margin-top: 1em;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 1em;
  color: #fff;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 35%;
  text-align: center;
`;

const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #21a321;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 3px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #21a321;
  }
`;


export default function TopSection() {
  return (
    <TopSectionContainer>
      <Logo>Global Warning</Logo>
      <Slogan>Keep it cool for safe living</Slogan>
      <Paragraph>You can help us cool off our world and have it go back to it's best state ever by donating to help fix our only world and beloved EARTH!</Paragraph>
      <DonateButton>Donate!</DonateButton>
    </TopSectionContainer>
  )
}