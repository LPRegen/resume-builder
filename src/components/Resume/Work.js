import React, { Component } from 'react';
import styled from 'styled-components';

export default class Work extends Component {
  render() {
    return (
      <div>
        <Header>Work Experience</Header>
        {this.props.work.map((work, index) => {
          if (index !== 0) {
            return (
              <Container key={index}>
                <Title>
                  {work.title}, {work.company}
                </Title>
                <FromTo>
                  {work.from} - {work.to}
                </FromTo>
              </Container>
            );
          }
        })}
      </div>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Header = styled.p`
  text-decoration: underline;
  font-size: 18px;
  font-weight: bold;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-decoration: underline;
  padding-top: 1rem;
`;

const FromTo = styled.p`
  font-size: 11px;
  font-weight: lighter;
`;
