import styled from "styled-components";

export function OtherObject() {
  return (
    <Object>
      <div />
      {/* todo なんかいい感じに配置できそうなやつ作る */}
      <div>くさむら</div>
    </Object>
  );
}

const Object = styled.div`
  display: grid;

  justify-items: right;
  grid-template-rows: 1fr auto;
`;
