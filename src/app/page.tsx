"use client";

import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <House>
        <LayerTop>
          <LayerElement>
            <Rooftop />
            <Floor />
          </LayerElement>
        </LayerTop>
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

const LayerTop = styled.div`
  background-color: #ffe7e7;

  width: 100%;
  height: 100%;

  position: absolute;
`;

// ここからコンポーネント分けたい
const LayerElement = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

const Rooftop = styled.div`
  background-color: #f38484;

  width: 100%;
  height: 64px;

  position: absolute;
  top: 0px;
`;

const Floor = styled.div`
  background-color: #724a4a;

  width: 100%;
  height: 40px;

  position: absolute;
  bottom: 0px;
`;
