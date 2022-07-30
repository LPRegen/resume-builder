import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

export default class PrintButton extends Component {
  render() {
    return <StyledButton href={'#'}>Print Resume</StyledButton>;
  }
}

const StyledButton = styled.button`
  all: unset;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0.3rem;
  background-color: ${colors.bgSecondary};
  color: ${colors.primaryText};
  border-radius: 20px;
  cursor: pointer;
  min-width: 120px;
  font-size: 14px;
`;
