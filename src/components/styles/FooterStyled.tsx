import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: white;
  h2 {
    font-size: 1.5rem;
    font-weight: 100;
    margin-bottom: 1.5rem;
  }

  .copyRight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 1.1rem;
    h1 {
      margin-left: 0;
    }

    .copyRight {
      flex-direction: column;
      text-align: center;
    }
  }
`;

export const FooterMainContent = styled.div`
  display: flex;
  padding: 3rem;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 100;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 1.1rem;
    h1 {
      margin-left: 0;
    }
  }
`;

// Footer icons
export const MediaLinks = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  text-align: left;
`;

export const FontAwesomeIcon = styled.i`
  margin-left: 0;
  margin-right: 1rem;
  font-size: 1.2rem;
  color: #e5e5e5;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.navItem};
  }
`;

export const NewsletterStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  max-width: 400px;

  h1 {
    margin-bottom: 2.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  form {
    margin: 1rem 0;
    border-radius: 0 2rem 2rem 0;

    input {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    text-align: center;

    p {
      max-width: 300px;
      text-align: center;
    }

    form {
      border-radius: 2rem;
   
  }
`;
