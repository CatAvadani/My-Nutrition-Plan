import styled from "styled-components";

export const AboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem auto;
  gap: 1rem;
  margin-top: 6rem;
  text-align: center;
  height: 100%;
  max-width: 70%;

  h1 {
    margin-top: 6rem;
  }

  h3 {
    margin-top: 2rem;
    font-weight: 100;
    width: 80%;
  }
  .homePageImg {
    width: 200px;
    height: 200px;
    margin-top: 1.2rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
      margin: 1rem;
      margin-top: 5rem;
      width: 100%;
    }
  }
`;
