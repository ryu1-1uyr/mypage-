import styled from "styled-components";

export function HangingSignboard({ text }: { text: string }) {
  return (
    <Signboard>
      <Chain />
      <Board>{text}</Board>
    </Signboard>
  );
}

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
