import styled from "styled-components";

export function HangingSignboard({ text }: { text: string }) {
  return (
    <Signboard>
      <Chains color="#2f2f2f" chainType="vertical" />
      <Chains color="#2f2f2f" chainType="horizontal" />
      <Chains color="#2f2f2f" chainType="vertical" />
      <Chains color="#2f2f2f" chainType="horizontal" />
      <Chains color="#2f2f2f" chainType="vertical" />
      <Board>{text}</Board>
    </Signboard>
  );
}

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
`;

const ChainWaku = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};

  width: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
`;

const Nakanuki = styled.div`
  background-color: #fff;

  width: 6px;
  height: 70%;

  border-radius: 6px;
`;

const Signboard = styled.div`
  display: grid;
  justify-items: center;

  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 3fr;
`;

const Board = styled.div`
  background-color: #7d553b;

  max-height: 104px;
  width: 100%;
`;
