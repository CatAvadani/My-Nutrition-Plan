import styled from "styled-components";

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  font-size: 1.1rem;
  font-weight: 100;
  gap: 10rem;

  h2 {
    font-size: 1.5rem;
    margin-left: 0;
  }

  ul {
    list-style: none;

    li {
      margin: 1rem 0;
      color: #e5e5e5;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: ${({ theme }) => theme.colors.navItem};
      }
    }
  }
  .div2-1,
  .div2-2 {
    display: flex;
    text-align: left;
    flex-direction: column;
    p {
      margin: 0.5rem;
    }

    ul {
      padding-left: 0;
    }
  }
  .div2-2 {
    h2 {
      margin-bottom: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 2rem;

    .div2-1,
    .div2-2 {
      text-align: center;
    }
  }
`;
