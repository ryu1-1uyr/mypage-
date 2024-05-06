import styled from "styled-components";

export function GroundSignboard({ text }: { text: string }) {
  return (
    <Board2>
      <div />
      <BoardTop></BoardTop>
      <BoardMiddle>{text}</BoardMiddle>
      <BoardUnder></BoardUnder>
    </Board2>
  );
}

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
