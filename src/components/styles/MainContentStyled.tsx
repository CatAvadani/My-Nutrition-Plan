import styled from "styled-components";

export const MainContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  padding: 1rem;
  margin: 1rem auto;
  margin-top: 6rem;
  text-align: center;
  height: 100%;
  max-width: 70%;

  h1 {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 1.7rem;
  }

  h3 {
    font-size: 1.3rem;
    line-height: 1.5;
    font-weight: 100;
    max-width: 70%;
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
    h3 {
      font-size: 1.1rem;
      max-width: 100%;
    }

    .homePageImg {
      display: none;
    }
  }
`;
