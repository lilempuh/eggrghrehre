import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
`;
export const Form = styled.form`
  margin: auto;
  width: 100%;
  font-size: 22px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  border: 2px solid #ececec;
`;
export const Input = styled.input`
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Button = styled.button`
  font-size: 22px;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: #ff00ff;
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover,
  &:focus {
    color: #2196f3;
  }
`;
