import { ButtonStyled } from "./styles/ButtonStyled";
import { FooterLinks } from "./styles/FooterLinks.styled";
import {
  FontAwesomeIcon,
  FooterMainContent,
  FooterStyled,
  MediaLinks,
  NewsletterStyled,
} from "./styles/FooterStyled";
import { InputStyled } from "./styles/InputStyled";

const today = new Date();
const year = today.getFullYear();

export default function Footer() {
  return (
    <FooterStyled>
      <FooterMainContent>
        <NewsletterStyled>
          <h2>Newsletter</h2>
          <p>
            Subscribe to our newsletter to receive the latest news and updates
          </p>
          <InputStyled>
            <input type='email' placeholder='Email Address' />
            <ButtonStyled type='submit'>Subscribe</ButtonStyled>
          </InputStyled>
        </NewsletterStyled>
        <FooterLinks>
          <div className='div2-1'>
            <h2>Company</h2>
            <ul>
              <li>Plans</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className='div2-2'>
            <h2>Contact</h2>
            <p>Vasagatan 10C</p>
            <p>Gothenburg, 411 24</p>
            <p>info@mynutritionplan.com </p>
            <p>Tel: 123-456-7890</p>
          </div>
        </FooterLinks>
      </FooterMainContent>
      <div className='copyRight'>
        <p>&copy; {year} My Nutrition Plan. By Catalina Avadani.</p>
        <MediaLinks>
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
        </MediaLinks>
      </div>
    </FooterStyled>
  );
}
