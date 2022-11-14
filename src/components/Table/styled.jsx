import styled from "styled-components";

export const ContainerRepo = styled.div`
  width: 100%;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #525252;
  border-radius: 5px;
  margin-bottom: 0.8rem;
  h1 {
    font-size: 1.2rem;
    color: #ffffff;
    margin-left: 10px;
  }
  a {
    color: #a2d2ff;
    font-size: 12px;
    margin-right: 10px;
    text-decoration: none;
    transition: 0.2s;
    :hover {
      color: white;
    }
  }
`;
