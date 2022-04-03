import styled from 'styled-components';

export const LoginPage = styled.div`
  width: 100vw;
  max-width: 700px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  width: 100%;
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  background-color: var(--color-content-background);
  border-radius: 0.4rem;
  padding: 6rem 2rem;
  margin-bottom: 6rem;

  h1 {
    margin-bottom: 2.6rem;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--color-title-text);
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-primary);
    color: var(--color-highlight-text);
    border: 0;
    border-radius: 0.6rem;
    cursor: pointer;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 0.2s;
    margin: 2rem 0 1.2rem 0;
  }

  button:hover {
    opacity: 0.8;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    max-width: 100vw;
    padding: 6rem 5rem;
    margin: 0 8rem;

    h1 {
      margin-bottom: 3.6rem;
    }
  }
`;