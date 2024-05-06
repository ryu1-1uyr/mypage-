import styled from "styled-components";

export function HangingSignboard({ text }: { text: string }) {
  return (
    <Signboard>
      <Chains color="#757575" chainType="vertical" />
      <Chains color="#757575" chainType="horizontal" />
      <Chains color="#757575" chainType="vertical" />
      <Chains color="#757575" chainType="horizontal" />
      <Chains color="#757575" chainType="vertical" />
      <BoardContainer>
        <BoardDetail>
          <Board>{text}</Board>
        </BoardDetail>
      </BoardContainer>
    </Signboard>
  );
}

const Signboard = styled.div`
  display: grid;
  justify-items: center;

  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 3fr;
`;

const BoardContainer = styled.div`
  background-color: #af7c5a;

  max-height: 104px;
  width: 74%;

  position: relative;

  border-radius: 8px;

  box-shadow: 4px -4px 4px 2px #4e372a, 6px 2px 8px 2px #363636,
    inset 0px 0px 24px -2px #4e372a;
`;

const Board = styled.div`
  text-align: center;
`;

const BoardDetail = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

type ChainType = "vertical" | "horizontal";

function Chains({ chainType, color }: { chainType: ChainType; color: string }) {
  return chainType === "horizontal" ? (
    <ChainWaku color={color}>
      <Nakanuki />
    </ChainWaku>
  ) : chainType === "vertical" ? (
    <Chain color={color} />
  ) : (
    <>到達しえない</>
  );
}

const Chain = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};

  width: 8px;

  border-radius: 5px;
  box-shadow: 1px 1px 2px 1px #363636;
`;

const ChainWaku = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};

  width: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  box-shadow: 1px 1px 2px 1px #363636;
`;

const Nakanuki = styled.div`
  background-color: #fff;

  width: 6px;
  height: 70%;

  border-radius: 6px;

  box-shadow: inset 3px 1px 4px 1px #8d8d8d;
`;
