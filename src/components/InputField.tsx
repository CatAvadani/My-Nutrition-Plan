import { ButtonStyled } from "./styles/ButtonStyled";
import { InputStyled } from "./styles/InputStyled";

interface SearchedRecipes {
  searchRecipe: string;
  onSearchSubmit: () => void;
  onSearchInput: () => void;
}

export default function InputField({
  searchRecipe,
  onSearchSubmit,
  onSearchInput,
}: SearchedRecipes) {
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
