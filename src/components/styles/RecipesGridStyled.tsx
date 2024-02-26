import styled from "styled-components";

export const RecipesGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
  }
`;

export const RecipeCard = styled.div`
  //background-color: rgba(255, 255, 255, 0.8);
  background-color: #f9fafb;
  border-radius: 0.2rem;
  //box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
  //box-shadow: 2px 2px 15px #a3a3a3, -2px -2px 15px #ffffff;

  text-align: center;

  &:nth-child(odd) {
    margin-top: 4rem;
    // height: 430px;
  }
  &:nth-child(even) {
    // height: 470px;
  }

  h3 {
    margin: 1rem auto;
    font-weight: 400;
  }

  p {
    margin: 0.5rem 0;
  }

  .ingredients {
    padding: 0.5rem;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

export const ImgStyled = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  // border-radius: 0.2rem;
  border-radius: 0.2rem 0.2rem 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // transition: all 0.3s ease-in-out;

    -webkit-transform: translateZ(0); /* Force GPU acceleration */
    transform: translateZ(0);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
