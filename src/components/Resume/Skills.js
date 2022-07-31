import React, { Component } from 'react';
import styled from 'styled-components';

export default class Skills extends Component {
  render() {
    return (
      <Container>
        <Header>Skills</Header>
        <List>
          {this.props.skills.map((skill, index) => {
            if (skill.skillValue) {
              return <Item key={index}>{skill.skillValue}</Item>;
            }
          })}
        </List>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Header = styled.p`
  font-weight: 500;
  text-decoration: underline;
  font-size: 18px;
`;

const List = styled.ul`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Item = styled.li`
  font-size: 14px;
`;
