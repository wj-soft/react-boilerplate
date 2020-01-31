import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

/**
 * 사용법에 대한 설명
 *
 * - `test` 컴퍼넌트입니다.
 */
function PButton(props) {
  return <Button {...props}>{props.children}</Button>
}

PButton.propTypes = {
  /** test docs */
  value: PropTypes.string,
};

PButton.defaultProps = {
  value: 'helloworld'
};

export default PButton;
