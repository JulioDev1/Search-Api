import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ width }) => width};
  margin-top: 20px;
`;
export const InputStyled = styled.input`
  width: 100%;
  height: 27px;
  border-radius: 10px;
  background-color: #8c8c8c;
  ::placeholder {
    color: #434343;
  }
  border: none;

  ::placeholder {
    margin-left: 10px;
  }
`;
export const IconStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  height: 30px;
  width: 30px;
  border-radius: 0.7rem;
  background-color: #3a86ff;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #6aa3ff;
  }
`;
