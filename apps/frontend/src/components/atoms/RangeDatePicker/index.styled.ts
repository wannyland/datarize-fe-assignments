import { styled } from "styled-components";
import { InputContainerProps, mixin } from "theme/mixin";

const Container = styled.div<InputContainerProps & InputContainerProps>`
  position: relative;
  gap: 0.8rem;
  ${mixin.InputBoxStyle}
  ${mixin.InputHeight}
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  height: 100%;
  width: 100%;
  cursor: pointer;
  position: relative;
`;
const Calendar = styled.div`
  position: absolute;
  display: inline-flex;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  > div {
    width: 100%;
  }
`;
export const S = {
  Container,
  Contents,
  Calendar,
};
