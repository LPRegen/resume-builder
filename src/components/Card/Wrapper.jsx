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
  margin: ${(props) => {
    switch (props.wrapperType) {
      case 'primary':
        return 'auto 0 1rem auto';
      case 'secondary':
        return '1rem auto 0 auto';
      case 'terciary':
        return 'auto auto 1.5rem auto';
      default:
        return '';
    }
  }};
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
  flex-direction: ${(props) => {
    switch (props.wrapperType) {
      case 'terciary':
        return 'column';
      default:
        return '';
    }
  }};
`;
