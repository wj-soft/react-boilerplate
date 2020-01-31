import React from 'react';
import styled from 'styled-components'

const Checkbox = styled.span`

`;

function PCheckbox(props) {
  return (
    <Checkbox {...props}>
      <input type="checkbox"></input>
      <span>{props.children}</span>
    </Checkbox>
  )
}

export default PCheckbox;
