import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

export default class Title extends Component {
  render() {
    return <Header>{this.props.title}</Header>;
  }
}

const Header = styled.h2`
  color: ${colors.primaryText};
  letter-spacing: 2px;
  padding: 1rem 0 1.5rem 0rem;
`;
