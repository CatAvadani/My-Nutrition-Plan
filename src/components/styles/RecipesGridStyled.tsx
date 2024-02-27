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
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: 0.2rem;

  text-align: center;

  &:nth-child(odd) {
    margin-top: 4rem;
    // height: 430px;
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
  border-radius: 0.2rem 0.2rem 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // This solves the issue of the hover effect on the image on Safari browsers
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
