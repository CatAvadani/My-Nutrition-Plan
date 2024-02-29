import { useForm, type FieldValues } from "react-hook-form";
import { ButtonStyled } from "./styles/ButtonStyled.styled";
import {
  FontAwesomeIcon,
  FooterMainContent,
  FooterStyled,
  MediaLinks,
  NewsletterStyled,
} from "./styles/Footer.styled";
import { FooterLinks } from "./styles/FooterLinks.styled";
import { InputStyled } from "./styles/Input.styled";

const today = new Date();
const year = today.getFullYear();

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };
  console.log("Errors", errors);
  return (
    <FooterStyled>
      <FooterMainContent>
        <NewsletterStyled>
          <h2>Newsletter</h2>
          <p>
            Subscribe to our newsletter to receive the latest news and updates.
          </p>
          <p>Email *</p>
          <InputStyled onSubmit={handleSubmit(onSubmit)}>
            <input
              type='email'
              placeholder='Email Address'
              {...register("email", {
                required: "true",
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            <ButtonStyled
              disabled={isSubmitted}
              type='submit'
              value='Subscribe'
            >
              Subscribe
            </ButtonStyled>
          </InputStyled>
          {errors.email?.type === "required" && (
            <span>Please enter a valid email address.</span>
          )}
          {errors.email?.type === "pattern" && (
            <span>This is not a valid email address.</span>
          )}
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
