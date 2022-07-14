import React, { Component } from 'react';
import styled from 'styled-components';

export default class Wrapper extends Component {
  render() {
    return (
      <StyledDiv wrapperType={this.props.wrapperType}>
        {this.props.children}
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: ${(props) => {
    switch (props.wrapperType) {
      case 'primary':
        return 'space-between';
      case 'terciary':
        return 'space-evenly';
      default:
        return '';
    }
  }};
  margin-top: ${(props) => {
    switch (props.wrapperType) {
      case 'primary':
        return '2.5rem';
      case 'secondary':
        return '1.5rem';
      case 'terciary':
        return '1rem';
      default:
        return '';
    }
  }};
`;
