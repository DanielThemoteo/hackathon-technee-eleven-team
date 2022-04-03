import styled from 'styled-components';

export const ImpostosSection = styled.div`
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

export const ImpostosContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

 

  h2 {
    color: var(--color-title-text);
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
  }
`;


export const ImpostosDescription = styled.div`
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

export const ImpostosCaracteristicas = styled.div`
  width: 85%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top:3rem;
  background-color:  #9C8C78;
  color: #FFF;
  border: 0;
    border-radius: 0.6rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 3rem;
    text-decoration: none;
    margin-bottom:1rem;

`;

export const ImpostosDetails = styled.div`
  width: 70%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0.2rem solid;
  background-color:  #ECEFF1;
  color: #616161;
    border-radius: 0.6rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 3rem;
    text-decoration: none;

`;