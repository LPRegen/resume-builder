import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

export default class Label extends Component {
  render() {
    return (
      <StyledLabel>
        {this.props.labelTitle}
        {this.props.children}
      </StyledLabel>
    );
  }
}

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 0.5rem 1rem;
  margin: 1px;
  border-radius: 10px;
  background-color: ${colors.bgInput};
  color: ${colors.label};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid transparent;

  :focus-within {
    border: 1px solid ${colors.selected};
    filter: drop-shadow(0px 0px 10px rgba(29, 144, 245, 0.25));
  }
`;
