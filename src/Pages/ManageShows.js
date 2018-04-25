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
        },
        shows: [
            {
                name: 'Walking Dead',
                rating: 4,
                imagePreview: 'http://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2018/01/the-walking-dead-season-8.jpg?itok=wE0cjlWr'
            }
        ]
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
        // const showComponents = []

        // for (const show of this.state.shows) {
        //     showComponents.push(
        //         <Show key={0} name={show.name} rating={show.rating} imagePreview={show.imagePreview} />
        //     )
        // }

        // for ( let i = 0; i < this.state.shows.length; i++ ){
        //     const show = this.state.shows[i];

        //     showComponents.push(
        //         <Show key={i} name={show.name} rating={show.rating} imagePreview={show.imagePreview} />
        //     )
        // }



        // return showComponents

        return this.props.allShows.map((show, i) => {
            return (
                <Show key={i} name={show.name} rating={show.rating} imagePreview={show.imagePreview} />
            )
        })

    }


    render() {
        console.log(this.state)
        return (
            <div className="manageShows">
                <section className="viewAllShows">
                    <header>
                        <h1>All Show</h1>
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
