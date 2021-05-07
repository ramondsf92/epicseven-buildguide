import React from 'react'
import './HeroList.css'

import HeroFrame from './HeroFrame'

export default class HeroList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }




    render() {
        return (
            <div className='hero-list'>
                {this.props.heroes.map(hero => {
                    return (
                        <HeroFrame key={hero.id} hero={hero} />
                    )
                })}
            </div>
        )
    }
}