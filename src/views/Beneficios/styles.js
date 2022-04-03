import styled from 'styled-components';

export const BeneficiosSection = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-content-background);
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  @media (min-width: 768px) {
    max-width: 1024px;
  }
`;



export const BeneficiosContainer = styled.div`
  width: 85%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin-top:5rem;

  p {
    width: 50%;
    color: var(--color-title-text);
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
  }

  input {
    text-align: center;
    font-size: 3rem;
    height: 4rem;
    width: 20%;
    border: 0.1rem solid var(--color-border);
    border-radius: 0.5rem;
    padding: 0.5rem;
    background: var(--color-input-background);
  }

  button {
    width: 20%;
    height: 5.6rem;
    background: var(--color-primary);
    color: var(--color-highlight-text);
    border: 0;
    border-radius: 0.6rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 0.2s;
  }
  
  button:hover {
    opacity: 0.95;
  }
`;