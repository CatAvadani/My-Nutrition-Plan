import styled from "styled-components";

export const InputStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  width: 100%;
  max-width: 25rem;
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.colors.navItem};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.7rem;
    background-color: transparent;
    color: white;
    border: none;
    outline: none;

    &::placeholder {
      color: white;
      padding-left: 0.5rem;
      font-size: 1.2rem;
    }
  }
`;
