import React, { Component } from 'react';
import styled from 'styled-components';

export default class Wrapper extends Component {
  render() {
    return <StyledDiv>{this.props.children}</StyledDiv>;
  }
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 0;
`;
