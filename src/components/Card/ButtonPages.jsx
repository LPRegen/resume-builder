import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

import { Link } from 'react-router-dom';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

export default class Button extends Component {
  render() {
    const path = this.props.path;
    return (
      <StyledLink to={`${path}`} primary={this.props.primary}>
        <StyledButton
          type={this.props.buttonType}
          direction={this.props.direction}
        >
          {this.props.direction === 'previous' && <IconPrev />}
          {this.props.buttonText}
          {this.props.direction === 'next' && <IconNext />}
        </StyledButton>
      </StyledLink>
    );
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
  border: 1px solid transparent;

  :focus {
    border: 1px solid rgba(101, 126, 224, 1);
  }

  :hover {
    background-color: rgba(84, 91, 105, 0.5);
  }
`;

const IconNext = styled(MdArrowForwardIos)`
  color: ${colors.primaryText};
`;

const IconPrev = styled(MdArrowBackIos)`
  color: ${colors.primaryText};
`;

const StyledLink = styled(Link)`
  all: unset;
  margin-left: ${(props) => (props.primary ? 'auto' : 'none')};
`;
