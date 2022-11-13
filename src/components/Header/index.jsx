import { Title } from "./styled";

export function Header({ logo, title }) {
  return (
    <Title>
      <h1>{title}</h1>

      {logo}
    </Title>
  );
}
