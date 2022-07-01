import React, { Component } from 'react';
import styled from 'styled-components';

export default class Wrapper extends Component {
  render() {
    return (
      <StyledDiv primary={this.props.primary}>{this.props.children}</StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => (props.primary ? '2.5rem' : '1.5rem')};
`;
