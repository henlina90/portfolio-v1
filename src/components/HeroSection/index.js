import React, { useState } from "react";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>lina hen</HeroH1>
        <HeroP>FRONT-END DEVELOPER</HeroP>
        <HeroBtnWrapper>
          <Button to="/" onMouseEnter={onHover} onMouseLeave={onHover}>
            Button text {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
