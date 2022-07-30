import React, { Component } from 'react';
import styled from 'styled-components';

export default class Form extends Component {
  render() {
    return (
      <StyledForm
        formType={this.props.formType}
        onSubmit={this.props.handleSubmit}
      >
        {this.props.children}
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.3rem;
  overflow: auto;
  height: ${(props) => {
    switch (props.formType) {
      case 'skills':
        return '450px';
      default:
        return 'auto';
    }
  }};
  min-width: 100%;
`;
