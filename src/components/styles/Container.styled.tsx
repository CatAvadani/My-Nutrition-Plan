import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 20px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.header};
  border-radius: 5rem;
  color: black;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;
