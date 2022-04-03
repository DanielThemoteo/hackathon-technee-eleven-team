import styled from 'styled-components';

export const HeaderSection = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #dee2e6;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content:center;

  @media (min-width: 768px) {
    max-width: 1024px;
  }
`;

export const HeaderContainer = styled.div`
  width: 85%;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;

  h1 {
    color: var(--color-title-text);
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
  }

  a{
      cursor:pointer;
  }
`;

export const SubHeaderContainer = styled.div`
    width: 85%;
    display: flex;
    justify-content: flex-end;
`;

export const CoinsContainer = styled.div`
  width: 30%;
  background-color: #9C8C78;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  p {
    color: #fff;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
  
`;