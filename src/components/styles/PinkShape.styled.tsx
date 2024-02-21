import styled from "styled-components";

export const PinkShape = styled.div`
  background-color: #fff1f2;
  position: absolute;
  z-index: -1;
  top: -6rem;
  right: 11rem;
  height: 31.25rem;
  width: 31.25rem;
  border-radius: 50%;
  filter: blur(10rem);

  @media (min-width: 640px) {
    width: 68.75rem;
  }
`;
