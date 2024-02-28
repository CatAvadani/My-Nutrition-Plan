import styled from "styled-components";

export const SavedRecipesStyled = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  margin: 0 auto;
  gap: 1.7rem;
  padding: 1.5rem;
  max-width: 70%;

  .delete {
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    color: white;
    border-radius: 50%;
    border: 1px solid white;
    padding: 0.7rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 1;

    &:hover {
      color: #ba1818;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
  }
`;

export const SavedRecipeCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  padding-bottom: 2rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    font-weight: bold;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.hoverText};
    }
  }

  @media (max-width: 768px) {
    margin: 0.5rem auto;
    width: 80%;
  }
`;

export const CenterDiv = styled.div`
  display: block;
  text-align: center;
  margin-top: 8rem;
  h1 {
    font-weight: 100;
    margin-bottom: 2rem;
  }
`;
