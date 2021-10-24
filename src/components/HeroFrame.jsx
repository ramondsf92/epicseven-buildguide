import React from "react";
import "./HeroFrame.css";

export default class HeroFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  alertName(hero) {
    alert("Clicked: " + hero.name);
  }

  elementIconHero(hero) {
    return `assets/element-${hero.element}-icon.png`;
  }

  getHeroIcon(hero) {
    return `assets/${hero.name.replaceAll(" ", "-")}-icon.png`;
  }

  render() {
    return (
      <div
        className="hero-frame"
        onClick={() => this.props.showDetails(this.props.hero)}
      >
        <img
          className="element-icon"
          src={this.elementIconHero(this.props.hero)}
          alt=""
        />
        <img
          className="hero-icon"
          src={this.getHeroIcon(this.props.hero)}
          alt=""
        />
        <img
          className="role-icon"
          src={`https://epic7x.com/wp-content/themes/epic7x/assets/img/${this.props.hero.role}.png`}
          alt=""
        />
        <div className="hero-title">
          {this.props.hero.rarity}
          <img className="hero-star" src="assets/star-icon.png" alt="" />
          {this.props.hero.name}
        </div>
      </div>
    );
  }
}
