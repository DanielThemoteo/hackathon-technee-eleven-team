import styled from 'styled-components';

export const ComparativoCCSection = styled.div`
  width: 100vw;
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

export const ComparativoCCContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

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
    margin-bottom: 3rem;
  }
  
  button:hover {
    opacity: 0.95;
  }

  h2 {
    color: var(--color-title-text);
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
  }
`;


export const ComparativoCCSafra = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top:3rem;
  background-color:  #ECEFF1;
  color: #616161;
  border: 0;
    border-radius: 0.6rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 3rem;
    text-decoration: none;

`;

export const ComparativoCCSafraCoins = styled.div`
  width: 85%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #9C8C78;
  color: #FFF;
  border: 0;
    border-radius: 0.6rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 2.5rem;
    text-decoration: none;

`;

export const ComparativoCCSafraDetails = styled.div`
  width: 30%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #616161;

  p{
    font-weight: 100;
    margin-top: 1.5rem;
  }

`;

export const ComparativoCCDetails = styled.div`
  width: 85%;
  height: 15rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top:3rem;
  background-color:  #ECEFF1;
  color: #616161;
  border: 0;
    border-radius: 0.6rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 3rem;
    text-decoration: none;

`;