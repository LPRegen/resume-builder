import React, { Component } from 'react';
import Card from '../Card';

export default class Work extends Component {
  render() {
    let work = [...this.props.workState];
    let selectedExperience = work[0];

    return (
      <Card>
        <Card.Title title="Work" />
        <Card.Form handleSubmit={this.props.handleSubmit}>
          <Card.Label labelTitle="Title">
            <Card.Input
              inputType="text"
              placeholder="Software developer"
              inputName="title"
              value={work[selectedExperience].title}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="Company">
            <Card.Input
              inputType="text"
              placeholder="The Home Depot"
              inputName="company"
              value={work[selectedExperience].company}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="From">
            <Card.Input
              inputType="text"
              placeholder="07/2018"
              inputName="from"
              value={work[selectedExperience].from}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="To">
            <Card.Input
              inputType="text"
              placeholder="12/2020"
              inputName="to"
              value={work[selectedExperience].to}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="Work descrition">
            <Card.TextArea
              name="description"
              placeholder="Nunc consequat metus a velit cursus, id posuere metus pretium. Praesent pharetra pulvinar neque at congue."
              value={work[selectedExperience].description}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
        </Card.Form>
        <Card.Wrapper wrapperType="terciary">
          <Card.Wrapper wrapperType="secondary">
            <Card.ButtonDelete
              deleteExperience={this.props.deleteExperience}
              display={work.length > 2 ? 'true' : 'false'}
            />
          </Card.Wrapper>
          <Card.Wrapper wrapperType="secondary">
            {work[0] > 1 && (
              <Card.ButtonAdd
                direction="previous"
                text="Previous"
                onClick={this.props.onClick}
              />
            )}
            {work[0] < 6 && (
              <Card.ButtonAdd
                primary
                direction="next"
                text={work[selectedExperience + 1] ? 'Next' : 'Add'}
                onClick={this.props.onClick}
              />
            )}
          </Card.Wrapper>
        </Card.Wrapper>
        <Card.Wrapper wrapperType="primary" position="center">
          <Card.Button
            buttonType="button"
            buttonText="Education"
            direction="previous"
            path="/education"
          />
          <Card.Button
            buttonType="submit"
            buttonText="Skills"
            direction="next"
            path="/skills"
          />
        </Card.Wrapper>
      </Card>
    );
  }
}
