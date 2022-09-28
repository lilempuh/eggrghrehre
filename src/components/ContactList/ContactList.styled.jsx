import styled from '@emotion/styled';

export const Contactelement = styled.li`
  font-size: 20px;
  padding: 10px;
  border-bottom: 1px solid black;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Wrapper = styled.div`
  font-size: 22px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 40px;
  margin-bottom: 10px;
  margin-top: 20px;
  border: 2px solid #ececec;
`;

export const Button = styled.button`
  margin-left: 10px;
  font-size: 18px;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  border: none;
  background-color: #808080;
`;
