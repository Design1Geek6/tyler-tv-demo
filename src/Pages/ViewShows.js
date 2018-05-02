import React, { Component } from 'react'
import ReactPropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Show from '../Show'
import './ViewShows.css'


export default class ViewShows extends Component {
    static propTypes = {
        allShows: ReactPropTypes.array.isRequired
    }

    renderShows = () => {
        const momApprovedShows = this.props.allShows.filter((show) => {
            return show.rating <= 4
        })
        return momApprovedShows.map((show) => {
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
                    <Link to="/manageShows">Manage Shows</Link>
                </section>
                <section className="currentShows">
                </section>
            </main>
        )
    }
}