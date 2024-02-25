import { ButtonStyled } from "./styles/ButtonStyled";
import { InputStyled } from "./styles/InputStyled";

// Create a type for the props of the InputField component
interface InputFieldProps {
  searchRecipe: string;
  onSearchSubmit: () => void;
  onSearchInput: () => void;
}

export default function InputField({
  searchRecipe,
  onSearchSubmit,
  onSearchInput,
}: InputFieldProps) {
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
