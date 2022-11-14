import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const Container = styled.div`
  height: 320px;
  width: 620px;
  border-radius: 15px 0px 0px 15px;
  background-color: #323232;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 12px;
    background-color: #f4f4f4;
    margin-right: 2px;
  }
  ::-webkit-scrollbar-thumb {
    width: 12px;
    border-radius: 15px;
    background-color: #323232;
  }
`;
export const ContainerRepo = styled.div`
  font-family: "Inter", sans-serif;
  margin-left: 1rem;
  margin-right: 2rem;
  margin-top: 2rem;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
