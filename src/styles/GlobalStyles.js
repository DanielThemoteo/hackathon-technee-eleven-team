import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;

    --color-background: #F1F9F2;
    --color-content-background: #FFFFFF;
    --color-input-background: #F1F9F1;
    --color-button-background: #2D065F;
    --color-border: #D5D5D7;
    --color-primary-text: #434647;
    --color-title-text: #03045e;
    --color-highlight-text: #FFFFFF;
    --color-primary: #2D065F;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  

  body {
    background-color: var(--color-background);
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  button,
  input,
  textarea {
    font-family: Roboto;
    line-height: 2.4rem;
    font-size: 1.6rem;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
