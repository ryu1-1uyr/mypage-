"use client";

import Image from "next/image";
import styled from "styled-components";
import { LayerTop } from "@/components/LayerTop/";
import { InnerObjects } from "@/components/InnerObjects";
import { Scenery } from "@/components/Scenery";

export default function Home() {
  return (
    <main>
      <House>
        <SceneryContainer>
          <Scenery />
        </SceneryContainer>
        <LayerTopContainer>
          <LayerTop />
        </LayerTopContainer>
        <InnerObjects />
      </House>
    </main>
  );
}

const House = styled.div`
  margin: 100px;
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
`;

const SceneryContainer = styled.div`
  position: absolute;
  z-index: -1;

  pointer-events: none;
`;
