import styled from "styled-components";

export function Scenery() {
  return (
    <Container>
      <BGContainer>
        <img
          src={
            "https://thumb.ac-illust.com/6c/6c04175de4297fbf49921a487dc1a2f6_t.jpeg"
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
  opacity: 0.4;
`;
