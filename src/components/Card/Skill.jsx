import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import { MdDeleteForever } from 'react-icons/md';

export default class Skill extends Component {
  render() {
    return (
      <StyledLabel>
        <StyledInput
          type="text"
          placeholder={this.props.placeholder}
          name={this.props.inputName}
          onChange={this.props.handleChange}
          value={this.props.value}
          required={true}
        />
        <StyledButton type="button" onClick={this.props.removeSkill}>
          <IconDelete />
        </StyledButton>
      </StyledLabel>
    );
  }
}

const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  all: unset;
  background-color: ${colors.bgSkills};
  padding-left: 0.5rem;
  border-radius: 10px;
  color: ${colors.primaryText};
  width: 80%;
  padding: 0.5rem 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  :focus {
    border: 1px solid ${colors.selected};
    filter: drop-shadow(0px 0px 10px rgba(29, 144, 245, 0.25));
  }
`;

const StyledButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  background-color: ${colors.bgSkills};
  color: ${colors.primaryText};
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  :hover {
    cursor: pointer;
  }
`;

const IconDelete = styled(MdDeleteForever)`
  pointer-events: none;
`;
