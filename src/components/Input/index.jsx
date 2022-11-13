import { IconStyled, InputContainer, InputStyled } from "./styled";

export function Input({
  placeholder,
  icon,
  type = "text",
  width = "100%",
  onChange,
}) {
  return (
    <InputContainer width={width}>
      <InputStyled placeholder={placeholder} type={type} onChange={onChange} />
      <IconStyled>{icon}</IconStyled>
    </InputContainer>
  );
}
