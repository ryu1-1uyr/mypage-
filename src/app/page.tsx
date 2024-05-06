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

  position: absolute;

  margin-left: -56px;
`;

const StyledMain = styled.main`
  height: 100vh;

  margin: 0;
  padding: 0;
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

  max-width: 960px;

  position: absolute;

  // そのうち困りそう
  margin-left: -32px;
  pointer-events: none;
`;

const SceneryContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  pointer-events: none;
`;
