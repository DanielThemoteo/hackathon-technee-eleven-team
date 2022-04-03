import React from 'react';

import { InputBlock } from './styles';

function Input({ name, label, value, ...rest }) {
  return(
    <InputBlock>
      <input name={name} placeholder={label} value={value} {...rest} />
    </InputBlock>
  );
}

export default Input;