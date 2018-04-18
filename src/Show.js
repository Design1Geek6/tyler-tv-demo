import React, { Component } from 'react'

export default class extends Component {
    render() {
        return (
            <article>
                <header><h3>{this.props.name}</h3></header>
                <p>{this.props.rating}</p>
                <img src={this.props.imagePreview} alt='unknow' />
            </article>
        )
    }
}