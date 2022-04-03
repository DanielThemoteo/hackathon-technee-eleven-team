import styled from 'styled-components';

export const EducacaoMEISection = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-content-background);
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h2{
    margin-top:2rem;
  }

  @media (min-width: 768px) {
    max-width: 1024px;
  }
`;

export const EducacaoMEIContainer = styled.div`
  width: 85%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h2 {
    color: var(--color-title-text);
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
  }
  

  button {
    width: 70%;
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
    margin-bottom: 2rem;
  }
  
  button:hover {
    opacity: 0.95;
  }
`;


export const EducacaoMEIDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  p {
    width: 95%;
    color: var(--color-title-text);
    font-size: 1.8rem;
    font-weight: 700;
  }
`;
export const EducacaoMEIVideo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top:3rem;

  p {
    color: var(--color-title-text);
    font-size: 1.5rem;
    font-weight: 700;
  }
`;