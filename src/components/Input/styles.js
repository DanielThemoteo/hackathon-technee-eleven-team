import styled from 'styled-components';

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;

  label {
    margin-bottom: 0.6rem;
  }

  input {
    height: 4rem;
    width: 100%;
    border: 0.1rem solid var(--color-border);
    border-left: 0.3rem solid;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background: var(--color-input-background);
    
    :required {
      border-left-color: var(--color-primary);
    }
    
    :invalid {
      border-left-color: var(--color-border);
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type=number] {
      -moz-appearance: textfield;
    }
  }
`;