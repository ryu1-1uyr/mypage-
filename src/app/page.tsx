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
        <InnerObjects>
          <div></div>
          <Signboard>
            <Board>看板1</Board>
            <Board>看板2</Board>
            <Board>看板3</Board>
          </Signboard>

          <BeneathObject>
            <Board2>
              <div />
              <BoardTop></BoardTop>
              <BoardMiddle>かんばん</BoardMiddle>
              <BoardUnder></BoardUnder>
            </Board2>
            <div />
            <Object>
              <div />
              <div>くさむら</div>
            </Object>
          </BeneathObject>
          <div></div>
        </InnerObjects>
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
  width: 100%;
  height: 100%;

  position: absolute;
`;

// wakeru

const InnerObjects = styled.div`
  display: grid;
  grid-template-rows: 56px auto auto 32px;

  width: 100%;
  height: 100%;
`;

const Signboard = styled.div`
  background-color: #8dd0b2;

  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`;

const Board = styled.div`
  background-color: #42544c;

  max-height: 120px;
`;

const BeneathObject = styled.div`
  display: flex;

  justify-content: space-around;
`;

const BoardTop = styled.div`
  width: 32px;
  height: 32px;

  background-color: #42544c;
`;
const BoardMiddle = styled.div`
  min-width: 176px;
  min-height: 64px;

  background-color: #42544c;
`;
const BoardUnder = styled.div`
  width: 32px;
  height: 80px;

  background-color: #42544c;
`;

const Board2 = styled.div`
  display: grid;

  justify-items: center;

  grid-template-rows: 1fr auto auto auto;
`;

//
const Object = styled.div`
  display: grid;

  justify-items: right;
  grid-template-rows: 1fr auto;
`;
