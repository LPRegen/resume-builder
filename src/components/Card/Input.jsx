import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

export default class Input extends Component {
  render() {
    return (
      <StyledInput
        type={this.props.inputType}
        placeholder={this.props.placeholder}
        name={this.props.inputName}
        value={this.props.value}
        onChange={this.props.handleChange}
        required={this.props.required}
      />
    );
  }
}

const StyledInput = styled.input`
  all: unset;
  color: ${colors.primaryText};
  font-size: 1rem;
  padding-top: 0.5rem;
`;
