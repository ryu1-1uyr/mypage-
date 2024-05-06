import styled from "styled-components";

export function Scenery() {
  return (
    <Container>
      <BGContainer>
        {/* <img
          src={
            "https://thumb.ac-illust.com/6c/6c04175de4297fbf49921a487dc1a2f6_t.jpeg"
          }
          width={800}
          height={600}
          alt="背景だよ"
        /> */}
        <DummyBG />
      </BGContainer>
    </Container>
  );
}

const DummyBG = styled.div`
  /* background: rgb(219, 217, 252);
  background: linear-gradient(
    36deg,
    rgba(219, 217, 252, 1) 0%,
    rgba(255, 218, 255, 1) 26%,
    rgba(153, 238, 255, 1) 100%
  ); */

  background: rgb(255, 181, 216);
  background: linear-gradient(
    0deg,
    rgba(255, 181, 216, 1) 0%,
    rgba(255, 255, 255, 1) 62%,
    rgba(154, 124, 124, 1) 100%
  );

  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const BGContainer = styled.div`
  max-width: 896px;
  height: 100%;

  overflow: hidden;
  opacity: 0.4;
`;
