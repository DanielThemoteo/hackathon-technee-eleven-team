import styled from 'styled-components';

export const CertificadoPage = styled.div`
  width: 100vw;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CertificadoContainer = styled.div`
  width: 100%;
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  background-color: var(--color-content-background);
  border-radius: 0.4rem;
  padding: 6rem 2rem;
  margin-bottom: 6rem;
  display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      margin-top: 3rem;
      text-align: center;
      font-size: 5rem;
      font-weight: 700;
      color: var(--color-title-text);
    }
    p {
      margin-top: 3rem;
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-title-text);
    }
 

    button {
      width: 50%;
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
      opacity: 0.95;
    }

  @media (min-width: 768px) {

    h1 {
      margin-bottom: 3.6rem;
    }
  }
`;

export const CertificadoImgContainer = styled.div`
  width: 100%;
  
  display: flex;
    flex-direction: column;
    align-items: center;
  margin-left: -5rem;
  
`;