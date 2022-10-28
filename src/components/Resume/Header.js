import React, { Component } from 'react';
import styled from 'styled-components';

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <FullName>
          {this.props.first} {this.props.last}
        </FullName>
        <ProfessTitle>{this.props.title}</ProfessTitle>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.div`
  grid-column: 1/ 3;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 2fr 5fr;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background-color: #6f727c;
`;

const FullName = styled.h1`
  font-weight: 800;
  grid-column: 2/5;
  padding-left: 1rem;
`;

const ProfessTitle = styled.h4`
  grid-column: 2/5;
  padding-left: 1rem;
  font-weight: 600;
`;
