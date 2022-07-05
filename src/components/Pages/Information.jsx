import React, { Component } from 'react';
import Card from '../Card';
import { withRouter } from '../../utils/withRouter';

class Information extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.navigate('/contact');
  }

  render() {
    return (
      <Card>
        <Card.Title title="Information" />
        <Card.Form handleSubmit={this.props.handleSubmit}>
          <Card.Label labelTitle="First name">
            <Card.Input inputType="text" placeholder="Liam" inputName="first" />
          </Card.Label>
          <Card.Label labelTitle="Last name">
            <Card.Input
              inputType="text"
              placeholder="Anderson"
              inputName="last"
            />
          </Card.Label>
          <Card.Label labelTitle="Professional title">
            <Card.Input
              inputType="text"
              placeholder="Software Engineer"
              inputName="title"
            />
          </Card.Label>
          <Card.Label labelTitle="Profile">
            <Card.TextArea
              name="profile"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend augue quis dui rhoncus molestie. Donec eget varius dolor. Praesent."
            />
          </Card.Label>
          <Card.Wrapper primary>
            <Card.Button
              buttonType="submit"
              buttonText="Contact"
              direction="next"
              path="/contact"
            />
          </Card.Wrapper>
        </Card.Form>
      </Card>
    );
  }
}

export default withRouter(Information);
