import styled from "styled-components";

export const Navigation = styled.div`
  position: fixed;
  z-index: 3;
  top: 2rem;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 90%;
  margin: 0 auto;
  padding: 0 2rem;
  background-color: rgba(256, 256, 256, 0.6);
  border-radius: 5rem;
  color: black;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    top: 1rem;
    align-items: flex-start;
    padding: 0.5rem 1rem;
  }
`;
