import styled from "styled-components";
import { HangingSignboard } from "./HangingSignboard";
import { GroundSignboard } from "./GroundSignboard";
import { OtherObject } from "./OtherObject";

export function InnerObjects() {
  return (
    <Container>
      <div></div>
      <SignboardContainer>
        <div />
        <HangingSignboard text={"看板1"} />
        <HangingSignboard text={"看板2"} />
        <HangingSignboard text={"看板3"} />
        <div />
      </SignboardContainer>
      <BeneathObject>
        <GroundSignboard text={"地面につくタイプの看板"} />
        <div />
        <OtherObject />
      </BeneathObject>
      {/* 地面の代わり */}
      <div />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 56px auto auto 32px;

  width: 100%;
  height: 100%;
`;

const BeneathObject = styled.div`
  display: flex;

  justify-content: space-around;
`;

const SignboardContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 16px 1fr 1fr 1fr 16px;
  gap: 40px;
`;
