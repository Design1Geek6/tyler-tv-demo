import React, { Component } from 'react'
import Show from '../Show'

export default class extends Component {
    state = {
        show: {}
    }
    handleOnChange = (event) => {
        if (event.target.id === "nameInput") {
            this.setState({
                newShowName: event.target.value
            })
        } else if (event.target.id === "ratingInput") {
            this.setState({
                newShowRating: event.target.value
            })
        } else if (event.target.id === "imageInput") {
            this.setState({
                newShowImage: event.target.value
            })
        }
    }

    handleOnClick = () => {
        this.setState((previousState) => {
            return {
                show: {
                    name: previousState.newShowName,
                    rating: previousState.newShowRating,
                    imagePreview: previousState.newShowImage
                }
            }
        })
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <section className="viewAllShows">
                    <header>
                        <h1>All Show</h1>
                    </header>
                    <div>
                        <Show name={this.state.show.name} rating={this.state.show.rating} imagePreview={this.state.show.imagePreview} />
                    </div>

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
