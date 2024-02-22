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

 
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
      margin: 1rem;
      width: 100%;
    }

  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 500px;
  height: 400px;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 400px;
    height: 300px;
  }

  &:video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 2rem;
  text-align: center;
  margin: 2rem auto;
  max-width: 80%;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 5rem;
  }
`;

export const InfoContainer = styled.div`
  padding: 2rem;
  width: 50%;
  text-align: left;
  .exploreBtn {
    background-color: #5fbc00;
    color: white;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    &:hover {
      background-color: #fafafa;
      color: #5fbc00;
    }
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
  p {
    font-size: 1rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    h2 {
      font-size: 1.2rem;
    }
  }
`;
