import { ContainerRepo } from "./styled";

export function Table({ name, language }) {
  return (
    <ContainerRepo>
      <h1>{name}</h1>
      <span>{language}</span>
    </ContainerRepo>
  );
}
