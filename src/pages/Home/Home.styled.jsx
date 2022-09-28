import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
export const Welcom = styled.h1`
  color: #2196f3;
  margin: 20px auto;
  text-align: center;
`;
