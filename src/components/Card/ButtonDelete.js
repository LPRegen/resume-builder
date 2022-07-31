import React, { Component } from 'react';
import { colors } from '../theme';
import styled from 'styled-components';
import { MdOutlineDeleteSweep } from 'react-icons/md';

export default class ButtonDelete extends Component {
  render() {
    return (
      <StyledDeleteButton
        type="button"
        onClick={this.props.deleteExperience}
        display={this.props.display}
      >
        Delete this experience
        <IconDelete />
      </StyledDeleteButton>
    );
  }
}

const StyledDeleteButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${colors.primaryText};
  background-color: ${colors.bgAddBtn};
  font-size: 14px;
  gap: 0.3rem;
  padding: 0.5rem 0.5rem;
  width: 100%;
  border-radius: 10px;
  visibility: ${(props) => (props.display === 'true' ? 'visible' : 'hidden')};
  border: 1px solid transparent;

  :hover {
    cursor: pointer;
  }

  :focus {
    border: 1px solid #ae1d54;
    filter: drop-shadow(0px 0px 5px rgba(174, 29, 84, 0.5));
  }
`;

const IconDelete = styled(MdOutlineDeleteSweep)`
  font-size: 1.2rem;
  pointer-events: none;
`;
