import styled from "styled-components";

export const InputStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  width: 100%;
  max-width: 25rem;
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.colors.navItem};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  padding: 0;

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
    font-size: 1.2rem;
    padding-left: 2.5rem;

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
      padding-left: 1rem;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    max-width: 18rem;
    margin-top: 2rem;
  }
`;
