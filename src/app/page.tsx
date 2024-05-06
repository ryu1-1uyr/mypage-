"use client";

import Image from "next/image";
import styled from "styled-components";
import { LayerTop } from "@/components/LayerTop/";
import { InnerObjects } from "@/components/InnerObjects";
import { Scenery } from "@/components/Scenery";

export default function Home() {
  return (
    <StyledMain>
      <House>
        <SceneryContainer>
          <Scenery />
        </SceneryContainer>
        <LayerTopContainer>
          <LayerTop />
        </LayerTopContainer>
        <InnerObjectsContainer>
          <InnerObjects />
        </InnerObjectsContainer>
      </House>
    </StyledMain>
  );
}

const InnerObjectsContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

const StyledMain = styled.main`
  height: 100vh;

  margin: 0;
  padding: 0;

  background: rgb(219, 217, 252);
  background: linear-gradient(
    36deg,
    rgba(219, 217, 252, 1) 0%,
    rgba(255, 218, 255, 1) 26%,
    rgba(153, 238, 255, 1) 100%
  );
`;

const House = styled.div`
  padding: 100px 100px 0 100px;
  width: 800px;
  height: 600px;

  position: relative;
`;

const LayerTopContainer = styled.div`
  width: 110%;
  height: 100%;

  position: absolute;

  // そのうち困りそう
  margin-left: -5%;
  pointer-events: none;
  z-index: 1;
`;

const SceneryContainer = styled.div`
  position: absolute;

  pointer-events: none;
`;
