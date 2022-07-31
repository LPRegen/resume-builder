import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import { MdExposurePlus1, MdArrowBackIos } from 'react-icons/md';

export default class ButtonAdd extends Component {
  render() {
    return (
      <StyledButton
        primary={this.props.primary}
        type="button"
        direction={this.props.direction}
        onClick={this.props.onClick}
      >
        {this.props.direction === 'previous' && (
          <IconPrev direction="previous" />
        )}
        {this.props.text}
        {this.props.direction === 'next' && <IconAdd direction="next" />}
      </StyledButton>
    );
  }
}

const StyledButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primaryText};
  background-color: ${colors.bgAddBtn};
  font-size: 14px;
  gap: 0.3rem;
  padding: 0.5rem 0.5rem;
  min-width: 100px;
  border-radius: 10px;
  margin-left: ${(props) => (props.primary ? 'auto' : 'none')};
  border: 1px solid transparent;

  :hover {
    cursor: pointer;
  }

  :focus {
    border: 1px solid #00bbff;
    filter: drop-shadow(0px 0px 5px rgba(168, 196, 250, 0.5));
  }
`;

const IconAdd = styled(MdExposurePlus1)`
  color: ${colors.primaryText};
  font-size: 1.2rem;
  pointer-events: none;
`;

const IconPrev = styled(MdArrowBackIos)`
  color: ${colors.primaryText};
  pointer-events: none;
`;
