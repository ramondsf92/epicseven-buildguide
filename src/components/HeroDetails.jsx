import React from "react";

export default class HeroDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <h3 style={{ color: "white" }}>
          Detalhes do Herói: {this.props.hero.name}
        </h3>
        <input
          type="button"
          value="Voltar"
          onClick={() => this.props.showHeroes()}
        ></input>
      </React.Fragment>
    );
  }
}
