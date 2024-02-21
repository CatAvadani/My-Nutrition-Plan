import { ButtonStyled } from "./styles/ButtonSytled";
import { InputStyled } from "./styles/InputStyled";

export default function InputField() {
  return (
    <InputStyled>
      <input type='text' placeholder='Search Recipes' />
      <ButtonStyled>🔎</ButtonStyled>
    </InputStyled>
  );
}
