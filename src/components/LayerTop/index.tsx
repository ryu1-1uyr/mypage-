"use client";
import styled from "styled-components";

export function LayerTop() {
  return (
    <LayerElement>
      <Rooftop>
        <RooftopLeft />
        <RooftopCenter />
        <RooftopRight />
      </Rooftop>
      <Floor />
    </LayerElement>
  );
}

const LayerElement = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

const RooftopLeft = styled.div`
  background: #fff;
  clip-path: polygon(100% 0, 0 100%, 0 0);
`;
const RooftopCenter = styled.div``;
const RooftopRight = styled.div`
  background: #fff;
  clip-path: polygon(100% 0, 100% 100%, 0 0);
`;

const Rooftop = styled.div`
  background-color: #f38484;

  width: 100%;
  height: 56px;

  display: grid;
  grid-template-columns: 32px auto 32px;

  position: absolute;
  top: 0px;
`;

const Floor = styled.div`
  background-color: #724a4a;

  width: 100%;
  height: 32px;

  position: absolute;
  bottom: 0px;
`;
