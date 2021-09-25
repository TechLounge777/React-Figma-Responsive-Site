import React from "react";
import {
  Container,
  InnerWrapper,
  Left,
  Wrapper,
  TiltWrapper,
} from "./Hero.styles";
import image from "../assets/hero.png";
import bg from "../assets/bg.png";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          <TiltWrapper options={{ max: 25 }}>
            <img src={image} alt="" />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

export default Hero;
