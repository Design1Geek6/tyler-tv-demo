import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManageShows from './Pages/ManageShows'
import ViewShows from './Pages/ViewShows'
import './App.css';



class App extends Component {
  state = {
    shows: []
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

  testPromises = () => {
    console.log('testing some promises')
    new Promise((resolve, reject) => {
      const success = true
      setTimeout(() => {
        if (success)
          resolve('Promise Was Successfull')
        else
          reject('Promise Was Failed EPICLLY')
      }, 3000)
    })
      .then((value) => { console.log(value) })
      .catch((error) => { console.log(error) })
    console.log('finished executing promise')
  }

  getShows = () => {
    fetch('http://localhost:3001/shows')
      .then((response) => {
        console.log("response:", response)
        return response.json()

      })
      .then((shows) => {
        console.log("jsonData:", shows)
        this.setState({ shows })
      })
      .catch((error) => {

      })
  }

  componentDidMount() {
    //this.testPromises()
    this.getShows()
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={() => <ViewShows allShows={this.state.shows} />} />
            <Route path="/manageShows" component={() => <ManageShows allShows={this.state.shows} createShow={this.createShows} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App
