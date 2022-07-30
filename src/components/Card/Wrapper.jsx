import React, { Component } from 'react';
import styled from 'styled-components';

export default class Wrapper extends Component {
  render() {
    return (
      <StyledDiv
        wrapperType={this.props.wrapperType}
        position={this.props.position}
      >
        {this.props.children}
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => {
    switch (props.wrapperType) {
      case 'primary':
        return 'space-evenly';
      default:
        return '';
    }
  }};
  margin-top: ${(props) => {
    switch (props.wrapperType) {
      case 'primary':
        return 'auto';
      case 'secondary':
        return '1.5rem';
      case 'terciary':
        return '1rem';
      default:
        return '';
    }
  }};
  margin: auto 0 1rem auto;
  left: ${(props) => {
    switch (props.position) {
      case 'left':
        return '0px';
      case 'center':
        return '0';
      default:
        return '';
    }
  }};
`;
