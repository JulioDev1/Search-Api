import { Header } from "../../components/Header";
import { Container } from "./styled";
import { GitHubIcon } from "../../icon/GitHubIcon";
import { Background } from "../../components/Background";

export function Home() {
  return (
    <Container>
      <Header
        logo={<GitHubIcon fill="black" size="42px" />}
        title="GitHub Profile"
      />
      <Background />
    </Container>
  );
}
