import styled from 'styled-components';

export const PerfilSection = styled.div`
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



export const PerfilContainer = styled.div`
  width: 85%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin-top:5rem;

  p {
    color: var(--color-title-text);
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
  }

  input {
    text-align: center;
    font-size: 3rem;
    height: 4rem;
    width: 50%;
    border: 0.1rem solid var(--color-border);
    border-radius: 0.5rem;
    padding: 0.5rem;
    background: var(--color-input-background);
  }
`;