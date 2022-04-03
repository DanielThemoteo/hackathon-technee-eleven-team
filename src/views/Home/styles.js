import styled from 'styled-components';

export const HomeSection = styled.div`
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



export const HomeContainer = styled.div`
  width: 85%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  button {
    width: 50%;
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
    margin-top: 3rem;
  }
  
  button:hover {
    opacity: 0.95;
  }
`;