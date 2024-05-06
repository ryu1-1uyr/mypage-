import styled from "styled-components";

export function InnerObjects() {
  return (
    <Container>
      <div></div>
      <SignboardContainer>
        <HangingSignboard text={"看板1"} />
        <HangingSignboard text={"看板2"} />
        <HangingSignboard text={"看板3"} />
      </SignboardContainer>

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

function HangingSignboard({ text }: { text: string }) {
  return (
    <Signboard>
      <Chain />
      <Board>{text}</Board>
    </Signboard>
  );
}

const SignboardContainer = styled.div`
  background-color: #8dd0b2;

  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 64px;
`;

const Signboard = styled.div`
  display: grid;
  justify-items: center;
`;

const Chain = styled.div`
  background-color: #4a4848;

  width: 16px;
`;

const Board = styled.div`
  background-color: #42544c;

  max-height: 104px;
  width: 100%;
`;
