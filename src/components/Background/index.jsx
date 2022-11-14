import { useEffect, useState } from "react";
import { SearchIcon } from "../../icon/SearchIcon";
import { Input } from "../Input";
import { Table } from "../Table";
import { ContainerHeader, Container, ContainerRepo } from "./styled";

export function Background() {
  const [search, setSearch] = useState("");
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/JulioDev1/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      });
  }, []);
  return (
    <Container>
      <ContainerHeader>
        <Input
          placeholder="Search Repository"
          icon={<SearchIcon fill="white" size="20px" />}
          width="80%"
          onChange={(e) => setSearch(e.target.value)}
        />
      </ContainerHeader>
      <ContainerRepo>
        {repositories
          .filter((repository) =>
            repository.name.toLowerCase().includes(search)
          )
          .map((repository) => {
            return (
              <Table
                key={repository.name}
                name={repository.name}
                html_url={repository.html_url}
              />
            );
          })}
      </ContainerRepo>
    </Container>
  );
}
