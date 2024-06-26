"use client";
import styled from "styled-components";
import css from "styled-jsx/css";

export function LayerTop() {
  return (
    <LayerElement>
      <Rooftop>
        <RooftopLeft />
        <RooftopCenter />
        <RooftopRight />
      </Rooftop>
      <Floor>
        <Okuyuki>
          <OkuyukiLeft />
          <OkuyukiCenter />
          <OkuyukiRight />
        </Okuyuki>
        <Dodai></Dodai>
      </Floor>
      <Hashira pillarPosition={"left"} />
      <Hashira pillarPosition={"right"} />
    </LayerElement>
  );
}
const Hashira = styled.div<{ pillarPosition: "left" | "right" }>`
  position: absolute;

  height: 100%;
  width: 16px;

  background: rgb(231, 176, 140);
  background: linear-gradient(0deg, #8a7262 0%, #e7b08c 100%);

  ${({ pillarPosition }) =>
    pillarPosition === "left"
      ? css`
          left: 0;
          box-shadow: 0 2px 4px 2px #fff, 8px 2px 4px -4px #111;
        `
      : css`
          right: 0;
          box-shadow: 0 2px 4px 2px #fff, -8px 2px 4px -4px #111;
        `}
`;

const LayerElement = styled.div`
  position: relative;
  width: 100%;

  // 要調整
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
  background-color: #ffe7e7;

  box-shadow: 0 16px 8px -10px #d48888, inset 0px 16px 14px -8px #ffc9c9;

  width: 100%;
  height: 88px;

  display: grid;
  grid-template-columns: 40px auto 40px;

  position: absolute;
  top: 0px;

  /* ごまかし */
  z-index: 1;
`;

const Floor = styled.div`
  width: 100%;

  position: absolute;
  bottom: 0px;
`;

const Dodai = styled.div`
  background-color: #8a7262;
  box-shadow: 0px 0px 2px 2px #fff;

  height: 32px;

  border-radius: 4px;
`;

const Okuyuki = styled.div`
  height: 64px;

  display: grid;
  grid-template-columns: 32px auto 32px;

  background-color: #b4a194;
  box-shadow: 0px 0px 2px 2px #fff, inset 0px -28px 24px 8px #8a7262;

  border-radius: 8px;
`;

const OkuyukiLeft = styled.div`
  background: #fff;
  clip-path: polygon(100% -4%, 0 100%, 0 0%);
  border-radius: 2px;
`;

const OkuyukiCenter = styled.div``;

const OkuyukiRight = styled.div`
  background: #fff;
  clip-path: polygon(100% 0%, 100% 100%, 4% 0%);
  border-radius: 2px;
`;
