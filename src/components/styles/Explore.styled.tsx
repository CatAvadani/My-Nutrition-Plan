import styled from "styled-components";

export const ExploreStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem auto;
  margin-top: 6rem;
  text-align: center;
  height: 100%;
  max-width: 70%;

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
