import styled, { keyframes } from "styled-components";

interface Props {
  duration: number;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FadeIn = styled.div<Props>`
  animation: ${fadeIn} ${props => props.duration}s;
`;

export default FadeIn;
