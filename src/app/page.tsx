"use client";

import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import { LayerTop } from "@/components/LayerTop";

export default function Home() {
  return (
    <main>
      <House>
        <LayerTopContainer>
          <LayerTop />
        </LayerTopContainer>
        <div>ぶらさがってるやつとか看板</div>
        <div>背景</div>
      </House>
    </main>
  );
}

const House = styled.div`
  // 仮で色置いておく
  background-color: #f7f7f2;

  width: 800px;
  height: 600px;

  position: relative;
`;

const LayerTopContainer = styled.div`
  background-color: #ffe7e7;

  width: 100%;
  height: 100%;

  position: absolute;
`;
