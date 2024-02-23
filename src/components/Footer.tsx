import { FontAwesomeIcon, FooterStyled } from "./styles/FooterStyled";

const today = new Date();
const year = today.getFullYear();

export default function Footer() {
  return (
    <FooterStyled>
      <ul>
        <li>
          <a href=''>
            <FontAwesomeIcon className='fa-brands fa-facebook' />
          </a>
        </li>
        <li>
          <a href=''>
            <FontAwesomeIcon className='fa-brands fa-twitter' />
          </a>
        </li>
        <li>
          <a href=''>
            <FontAwesomeIcon className='fa-brands fa-instagram' />
          </a>
        </li>
      </ul>
      <p> © {year} My Nutrition Plan. By Catalina Avadani.</p>
    </FooterStyled>
  );
}
