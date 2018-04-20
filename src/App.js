import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManageShows from './Pages/ManageShows'
import ViewShows from './Pages/ViewShows'
import './App.css';


class App extends Component {
  state = {
    shows: [
      {
        name: 'Walking Dead',
        rating: 4,
        imagePreview: 'http://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2018/01/the-walking-dead-season-8.jpg?itok=wE0cjlWr'
      }
    ]
  }

  createShows = (show) => {
    this.setState((prev) => {
      const existingShows = prev.shows
      existingShows.push(show)

      return {
        shows: existingShows
      }
    })
  }


  render() {
    return (
      <Router>
        <div className="App">
          <ViewShows allShows={this.state.shows} />
          <ManageShows allShows={this.state.shows} createShows={this.createShows} />
          <Switch>
            <Route path="/"/>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App
