import React, { Component } from 'react'
import ReactPropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Show from '../Show'
import './ManageShows.css'


export default class ManageShows extends Component {
    static proTypes = {
        createShow: ReactPropTypes.func.isRequired
    }
    state = {
        show: {
            name: '',
            rating: -1,
            imagePreview: ''
        }
    }
    handleOnChange = (event) => {
        if (event.target.id === "nameInput") {
            this.setState({
                newShowName: event.target.value
            })
        } else if (event.target.id === "ratingInput") {
            this.setState({
                newShowRating: Number(event.target.value)
                // this is to convert a string to a numnber
            })
        } else if (event.target.id === "imageInput") {
            this.setState({
                newShowImage: event.target.value
            })
        }
    }

    handleOnClick = () => {
        this.props.createShow({
            name: this.state.newShowName,
            rating: this.state.newShowRating,
            imagePreview: this.state.newShowImage
        })
    }

    renderShows = () => {

        return this.props.allShows.map((show, i) => {
            return (
                <Show key={i} name={show.name} rating={show.rating} imagePreview={show.imagePreview} />
            )
        })

    }

    getAvgRating = () => {
        const sumOfRatings = this.props.allShows.reduce((accumulator, show) => {
            return show.rating + accumulator
        }, 0)
        return sumOfRatings / this.props.allShows.length
    }

    hasEnoughKidShows = () => {
        const minRequiredKidShows = 2

        let kidShowCount = 0
        let remainingShows = this.props.allShows.length
        while (kidShowCount < minRequiredKidShows && remainingShows) {
            remainingShows--

            const show = this.props.allShows[remainingShows]

            if (show.rating === 1) {
                kidShowCount++
            }
        }
        return (kidShowCount >= minRequiredKidShows).toString()
    }

    render() {
        console.log(this.state)
        return (
            <div className="manageShows">
                <section className="viewAllShows">
                    <header>
                        <h1>All Show</h1>
                        <p>Average Rating: {this.getAvgRating()}</p>
                        <p>Hass Enough Kids Shows: {this.hasEnoughKidShows()}</p>
                    </header>
                    <div>
                        {this.renderShows()}
                    </div>
                    <Link to="/">View Shows</Link>
                </section>
                <section className="createShow">
                    <header>
                        <h1>New Show</h1>
                    </header>
                    <div>
                        <div><label>Name:</label><input id="nameInput" onChange={this.handleOnChange} /></div>
                        <div><label>Rating:</label><input id="ratingInput" onChange={this.handleOnChange} /></div>
                        <div><label>Preview Image:</label><input id="imageInput" onChange={this.handleOnChange} /></div>
                        <button onClick={this.handleOnClick}>Create</button>
                    </div>
                </section>
            </div>
        )
    }
}
