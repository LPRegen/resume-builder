import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

export default class Button extends Component {
  render() {
    return (
      <StyledButton type="button" direction={this.props.direction}>
        {this.props.direction === 'previous' && <IconPrev />}
        {this.props.buttonText}
        {this.props.direction === 'next' && <IconNext />}
      </StyledButton>
    );
  }
}

const StyledButton = styled.button`
  all: unset;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0.5rem;
  background-color: ${colors.bgSecondary};
  color: ${colors.primaryText};
  border-radius: 20px;
  cursor: pointer;
  min-width: 120px;
  font-size: 14px;
`;

const IconNext = styled(MdArrowForwardIos)`
  color: ${colors.primaryText};
`;

const IconPrev = styled(MdArrowBackIos)`
  color: ${colors.primaryText};
`;
