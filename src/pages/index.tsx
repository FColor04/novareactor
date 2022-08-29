import * as React from "react";
import type { HeadFC } from "gatsby";
import banner from '../images/Banner.inline.svg';
import styled from "styled-components";
import Layout from "../components/layout";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 60vw;
  margin: 0 auto;
`;

const StyledP = styled.p`
  text-align: center;
  font-size: 1.3em;
`;

const StyledBannerSvg = styled(banner)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100vw;
  height: fit-content;
  transform: translate(-50%, -50%);
`;

const AnimatedSmoke = styled.div`
  @keyframes smoke {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(50%);
    }
    10% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(-150%, -350%) scale(200%);
    }
  }
  
  border-radius: 100%;
  width: 120px;
  height: 120px;
  background-color: white;
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  animation: smoke 3s ease-out infinite;
`;

const StyledBanner = styled.div`
  position: relative;
  width: 100vw;
  height: 47vw;
  ${AnimatedSmoke}:nth-child(1) {animation-delay: -1s;}
  ${AnimatedSmoke}:nth-child(2) {animation-delay: -2s;}
  ${AnimatedSmoke}:nth-child(3) {animation-delay: -3s;}
  ${AnimatedSmoke}:nth-child(4) {animation-delay: -4s;}
  ${AnimatedSmoke}:nth-child(5) {animation-delay: -5s;}
`;

const Header = styled.h1`
  font-size: 4em;
  background-color: #ffeee0;
  padding: 0.2rem 2rem;
`;

export const IndexPage = () => {
  return (
      <Layout>
          <StyledMain>
              <StyledBanner>
                  <StyledBannerSvg/>
                  ${Array.apply(0, Array(5)).map(() => <AnimatedSmoke/>)}
              </StyledBanner>
              <Header>Nova Reactor</Header>
              <StyledP>
                  We're a group of passionate game developers, we are currently publishing on itch.io with plans to move to
                  steam when the time is right and when the community grows! On this site you'll find the devlogs, if you
                  like recorded format more, check out our YouTube channel.
              </StyledP>

              <StyledP>
                  This website is still work in progress! <br />
                  Copyright 2022 (c) Nova Reactor <br />
                  Marcinure1@gmail.com
              </StyledP>
          </StyledMain>
      </Layout>
  )
}

export default IndexPage;
export const Head: HeadFC = () => <title>Nova Reactor</title>
