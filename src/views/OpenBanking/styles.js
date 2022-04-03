import styled from 'styled-components';

export const OpenBankingPage = styled.div`
  width: 100vw;
  max-width: 700px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OpenBankingContainer = styled.div`
  width: 1000px;
  height: 600px;
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  background-color: var(--color-content-background);
  border-radius: 0.4rem;
  margin-bottom: 6rem;
  display: flex;
  h1 {
    margin-bottom: 2.6rem;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--color-title-text);
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

export const InformationOpenBanking = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a{
      margin-top: 2.5rem;
      color: var(--color-title-text);
  }
  button {
    width: 10%;
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
    margin-top: -2rem;
    margin-left: 80rem;
  }
  
`;