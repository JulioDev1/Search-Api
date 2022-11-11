import { InputContainer, MenuContainer, Title } from "./styled";
import { InputLabel } from "./styled";
import { AiOutlineSearch } from "react-icons/ai";
import GitIcon from "../../icon/free_icon_1.svg";
export function MenuSearch() {
  return (
    <MenuContainer>
      <Title>
        <h1>GitHub Repository</h1>
        <img src={GitIcon} alt="" />
      </Title>
      <InputContainer>
        <InputLabel placeholder="Search your project" />
        <label>
          <AiOutlineSearch />
        </label>
      </InputContainer>
    </MenuContainer>
  );
}
