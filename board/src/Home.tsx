import React from "react";

interface HomeProps {}

interface HomeStates {
  greeting: string;
}

export default class Home extends React.Component<HomeProps, HomeStates> {
  //states & props
  state: HomeStates;
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      greeting: "Hello World!",
    };
  }

  //render
  render() {
    return (
      <div>
        <p> {this.state.greeting} </p>
      </div>
    );
  }
}
