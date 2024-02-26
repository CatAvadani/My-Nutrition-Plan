import styled from "styled-components";

export const SavedRecipesStyled = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  margin: 0 auto;
  padding: 3rem;
  margin-top: 8rem;
  max-width: 1200px;

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
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }

  a {
    position: absolute;
    z-index: 1;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.2rem;
    cursor: pointer;
    border: 2px solid white;
    transition: all 0.3s ease-in-out;
    color: white;
    text-decoration: none;
    padding: 0.5rem 2rem;
  }

  @media (max-width: 768px) {
    margin: 0.5rem auto;
    width: 80%;
  }
`;
