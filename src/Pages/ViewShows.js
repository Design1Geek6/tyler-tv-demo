import React, { Component } from 'react'
import './ViewShows.css'
import Show from '../Show'
import ReactPropTypes from 'prop-types'

export default class ViewShows extends Component {
    static propTypes = {
        allShows: ReactPropTypes.array.isRequired
    }

    renderShows = () => {
        return this.props.allShows.map((show) => {
            return (
                <Show name={show.name} rating={show.rating} imagePreview={show.imagePreview} />
            )
        })
    }

    render() {
        return (
            <main className="viewShows">
                <section className="availableShows">
                    <header><h3>Available Shows</h3></header>
                    {this.renderShows()}
                </section>
                <section className="currentShows">
                </section>
            </main>
        )
    }
}