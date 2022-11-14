import { ContainerRepo } from "./styled";

export function Table({ name, html_url }) {
  return (
    <ContainerRepo>
      <h1>{name}</h1>
      <a href={html_url}> Acessar repositorio</a>
    </ContainerRepo>
  );
}
