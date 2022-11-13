import { useState } from "react";
import { SearchIcon } from "../../icon/SearchIcon";
import { Input } from "../Input";
import { Table } from "../Table";
import { ContainerHeader, Container, ContainerRepo } from "./styled";

export function Background() {
  const [search, setSearch] = useState("");
  console.log(search);
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
        <Table name="Desafio-Ally-02" language="Updated 3 days ago" />
        <Table name="Desafio-Ally-02" language="Updated 3 days ago" />
        <Table name="Desafio-Ally-02" language="Updated 3 days ago" />
      </ContainerRepo>
    </Container>
  );
}
