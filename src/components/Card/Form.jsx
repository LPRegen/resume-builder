import React, { Component } from 'react';
import styled from 'styled-components';

export default class Form extends Component {
  render() {
    return <StyledForm>{this.props.children}</StyledForm>;
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
