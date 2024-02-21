import styled from "styled-components";

export const GreenShape = styled.div`
  background-color: #dcfce7;
  position: absolute;
  top: -1rem;
  left: -35rem;
  height: 31.25rem;
  width: 50rem;
  border-radius: 50%;
  filter: blur(10rem);

  @media (min-width: 640px) {
    width: 68.75rem;
  }
`;
