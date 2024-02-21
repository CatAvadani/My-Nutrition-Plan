import { ButtonStyled } from "./styles/ButtonStyled";
import { InputStyled } from "./styles/InputStyled";

export default function InputField({
  searchRecipe,
  onSearchSubmit,
  onSearchInput,
}) {
  return (
    <InputStyled onSubmit={onSearchSubmit}>
      <input
        type='text'
        placeholder='Search Recipes'
        value={searchRecipe}
        onChange={onSearchInput}
      />
      <ButtonStyled type='submit'>🔎</ButtonStyled>
    </InputStyled>
  );
}
