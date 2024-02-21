import styled from "styled-components";

export const RecipesGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
  }
`;

export const RecipeCard = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.5rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  height: 450px;

  h3 {
    margin: 1rem auto;
    font-weight: 400;
  }

  p {
    margin: 0.5rem 0;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

export const ImgStyled = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 0.5rem;
  border-radius: 0.5rem 0.5rem 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
