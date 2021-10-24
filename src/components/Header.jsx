import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <img className="header-title" src="assets/header-banner.jpg" alt="" />
        <div className="header-options">
          <h2 onClick={() => this.props.showHeroes()}>Heroes</h2>
          <h2 onClick={() => this.props.showArtifacts()}>Artifacts</h2>
          <h2 onClick={() => this.props.showArtifacts()}>Hunts</h2>
        </div>
      </div>
    );
  }
}
