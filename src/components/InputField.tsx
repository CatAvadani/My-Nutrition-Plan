import { ButtonStyled } from "./styles/ButtonStyled.styled";
import { InputStyled } from "./styles/Input.styled";

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
      <ButtonStyled type='submit'>
        <i className='fas fa-search'></i>
      </ButtonStyled>
    </InputStyled>
  );
}
