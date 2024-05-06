"use client";

import styled from "styled-components";

export function LayerTop() {
  return (
    <LayerElement>
      <Rooftop />
      <Floor />
    </LayerElement>
  );
}

const LayerElement = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

const Rooftop = styled.div`
  background-color: #f38484;

  width: 100%;
  height: 64px;

  position: absolute;
  top: 0px;
`;

const Floor = styled.div`
  background-color: #724a4a;

  width: 100%;
  height: 40px;

  position: absolute;
  bottom: 0px;
`;
