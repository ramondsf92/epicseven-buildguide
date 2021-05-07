import React from 'react'
import './HeroFrame.css'

export default class HeroFrame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    elementIconHero(hero) {
        return `assets/element-${hero.element}-icon.png`
    }

    render() {
        return (
            <div className="hero-frame">
                <img className="hero-icon" src={this.props.hero.img} alt="" />
                <img className="element-icon" src={this.elementIconHero(this.props.hero)} alt="" />
                    {this.props.hero.rarity}
                <img className="hero-star" src="assets/star-icon.png" alt="" />
                {this.props.hero.name}
            </div>
        )
    }
}