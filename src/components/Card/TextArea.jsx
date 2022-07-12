import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

export default class TextArea extends Component {
  render() {
    return (
      <StyledTextArea
        cols="25"
        rows="8"
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.handleChange}
      />
    );
  }
}

const StyledTextArea = styled.textarea`
  all: unset;
  color: ${colors.primaryText};
  font-size: 1rem;
  padding-top: 0.5rem;
`;
