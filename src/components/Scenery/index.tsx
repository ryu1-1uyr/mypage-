import styled from "styled-components";

export function Scenery() {
  return (
    <Container>
      <BGContainer>
        <img
          src={
            "https://min-chi.material.jp/mc/materials/background-c/railroad_crossing/_railroad_crossing_1.jpg"
          }
          width={800}
          height={600}
          alt="背景だよ"
        />
      </BGContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const BGContainer = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
  opacity: 0.3;
`;
