import styled from "styled-components";
export const InputLabel = styled.input`
  border-style: none;
  font-family: "Inter", sans-serif;
  width: 80%;
  height: 40px;
  margin-top: 20px;
  background-color: #f3f3f3;
  font-size: 13px;
  padding: 0 0 0 70px;
  border-radius: 5px;
`;
export const InputContainer = styled.div`
  position: relative;
  width: 650px;
  height: 320px;
  display: flex;
  border-radius: 15px;
  background-color: #ffffff;
  justify-content: center;
  label {
    position: absolute;
    top: 33px;
    right: 75px;
    svg {
      height: 15px;
      opacity: 50%;
    }
  }
`;
export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-family: "Inter", sans-serif;
    color: white;
    font-size: 500;
    margin-bottom: 10px;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  row-gap: 10px;
  width: 100%;
  img {
    width: 60px;
    fill: white;
    margin-bottom: 14px;
  }
`;
