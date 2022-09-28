import styled from '@emotion/styled';

export const WrapperContainer = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;

  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    background-color: #fff;
    color: #010101;
  }
  img,
  svg {
    display: block;
    max-width: 100%;
    heigh: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a {
    text-decoration: none;
    color: inherit;
  }
`;
