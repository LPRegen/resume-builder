import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import { MdExposurePlus1, MdArrowBackIos } from 'react-icons/md';

export default class ButtonAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }

  render() {
    return (
      <StyledButton type="button" direction={this.props.direction}>
        {this.props.direction === 'previous' && <IconPrev />}
        {this.props.text}
        {this.props.direction === 'next' && <IconAdd />}
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
`;

const IconAdd = styled(MdExposurePlus1)`
  color: ${colors.primaryText};
  font-size: 1.2rem;
`;

const IconPrev = styled(MdArrowBackIos)`
  color: ${colors.primaryText};
`;
