import React, { Component } from 'react'
import './App.css'
import { heroes } from './heroes'

import Header from './components/Header'
import HeroList from './components/HeroList'

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showingHeroes: false,
            searchBarName : "",
            
        }

        this.showHeroList = this.showHeroList.bind(this)
        this.listHeroes = this.listHeroes.bind(this)
    }

    showHeroList() {
        if(this.state.showingHeroes) {
            this.setState({showingHeroes: false})
        }
        else {
            this.setState({showingHeroes: true})
        }
    }

    listHeroes() {
        const filteredHeroes = heroes.filter(hero => {
            return hero.name.toLowerCase().includes(this.state.searchBarName.toLowerCase())
        })

        if(this.state.showingHeroes) {
            return <HeroList 
                    heroes={filteredHeroes} />  
        } 
        else return 
    }

    changeSearchName(event) {
        this.setState({searchBarName: event.target.value})
    }

    searchHero() {
        console.log(heroes.filter(hero => {
            return hero.name.toLowerCase().includes(this.state.searchBarName.toLowerCase())
        }))
    }

    render() {
        return (
            <div className="App">
                <Header title={this.props.title} showHeroes={this.showHeroList}/>
                <input type="text" onChange={(e) => this.changeSearchName(e)} />
                <input className="button-search" type="button" onClick={() => this.searchHero()} value="Search" />
                {this.listHeroes()}
            </div>
        )
    }
}