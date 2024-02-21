import { FontAwesomeIcon, FooterStyled } from "./styles/FooterStyled";

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
      <p> © 2024 My Nutrition Plan. All rights reserved.</p>
    </FooterStyled>
  );
}
