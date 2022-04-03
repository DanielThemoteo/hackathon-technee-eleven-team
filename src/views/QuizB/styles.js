import styled from 'styled-components';

export const QuizBSection = styled.div`
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

export const QuizBContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  button {
    width: 70%;
    height: 5.6rem;
    background-color:  #ECEFF1;
    color: #616161;
    border: 0;
    border-radius: 0.6rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 3rem;
    display: flex;
    align-items: center;
    padding-left: 5rem;
    text-decoration: none;
    transition: 0.2s;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  
  button:hover {
    opacity: 0.95;
  }

  h2 {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    margin-top:2rem;
  }
  h1{
    margin-top: 3rem;
  }
`;


