import React, { Component } from "react";
import "./App.css";
import { heroes } from "./heroes";

import Header from "./components/Header";
import HeroList from "./components/HeroList";
import HeroDetails from "./components/HeroDetails";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingHeroes: false,
      searchBarName: "",
      showingArtifacts: false,
      showingHunts: false,
      showingDetails: false,
      heroDetailing: null,
    };

    this.showHeroList = this.showHeroList.bind(this);
    this.listHeroes = this.listHeroes.bind(this);
    this.showArtifactList = this.showArtifactList.bind(this);
    this.listArtifacts = this.listArtifacts.bind(this);
    this.listHeroDetails = this.listHeroDetails.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.backToHeroes = this.backToHeroes.bind(this);
  }

  showHeroList() {
    if (this.state.showingHeroes) {
      this.setState({ showingHeroes: false });
    } else {
      this.setState({
        showingHeroes: true,
        showingArtifacts: false,
        showingDetails: false,
        heroDetailing: null,
      });
    }
  }

  listHeroes() {
    const filteredHeroes = heroes.filter((hero) => {
      return hero.name
        .toLowerCase()
        .includes(this.state.searchBarName.toLowerCase());
    });

    if (this.state.showingHeroes) {
      return (
        <HeroList heroes={filteredHeroes} showDetails={this.showDetails} />
      );
    } else return;
  }

  showArtifactList() {
    if (this.state.showingArtifacts) {
      this.setState({ showingArtifacts: false });
    } else {
      this.setState({ showingArtifacts: true, showingHeroes: false });
    }
  }

  listArtifacts() {
    if (this.state.showingArtifacts)
      return (
        <h3 style={{ color: "white" }}>
          Lista de Artefatos (Disponível em breve)
        </h3>
      );
    else return;
  }

  changeSearchName(event) {
    this.setState({ searchBarName: event.target.value });
  }

  searchHero() {
    console.log(
      heroes.filter((hero) => {
        return hero.name
          .toLowerCase()
          .includes(this.state.searchBarName.toLowerCase());
      })
    );
  }

  showDetails(hero) {
    this.setState({
      showingHeroes: false,
      showingDetails: true,
      heroDetailing: hero,
    });
  }

  listHeroDetails() {
    if (this.state.showingDetails)
      return (
        <HeroDetails
          hero={this.state.heroDetailing}
          showHeroes={this.showHeroList}
        />
      );
    else return;
  }

  backToHeroes() {}

  show;

  render() {
    return (
      <div className="App">
        <Header
          title={this.props.title}
          showHeroes={this.showHeroList}
          showArtifacts={this.showArtifactList}
        />
        <div className="search-form">
          <input type="text" onChange={(e) => this.changeSearchName(e)} />
          <input
            className="button-search"
            type="button"
            onClick={() => this.searchHero()}
            value="Search"
          />
        </div>
        {this.listHeroes()}
        {this.listArtifacts()}
        {this.listHeroDetails()}
      </div>
    );
  }
}
