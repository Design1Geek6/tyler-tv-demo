import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManageShows from './Pages/ManageShows'
import ViewShows from './Pages/ViewShows'
import './App.css';



class App extends Component {
  state = {
    shows: []
  }

  createShow = (show) => {
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

  // getShows = () => {
  //   fetch('http://localhost:3001/shows')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((shows) => {
  //       this.setState({ shows })
  //     })
  //     .catch((error) => {
  //       this.setState({errorMessage: error})
  //     })
  // }

  getShows = async () => {
    try {
      const response = await fetch('http://localhost:3001/shows')
      const shows = await response.json()
      this.setState({ shows })

    }catch (error){
      this.setState({ errorMessage: error })
    }
  }

  // postShow = (showToSave) => {
  //   const postInit = {
  //     method: 'POST',
  //     mode: 'cors',
  //    // header: new Headers(),
  //    headers: {
  //      'Content-Type': 'application/json'
  //    },
  //     body: JSON.stringify(showToSave)
  //   }
  //   fetch('http://localhost:3001/shows', postInit)
  //     .then((postShowResp) => {
  //       return postShowResp.json()
  //     })
  //     .then((show) => {
  //       this.createShow(show)
  //     })
  //     .catch((error) => {
  //       this.setState({errorMessage: error})
  //   })
  // }

  postShow = async (showToSave) => {
    const postInit = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(showToSave)
    }
    try {
      const postShowResp = await fetch('http://localhost:3001/shows', postInit)
      const show = await postShowResp.json()
      this.createShow( show )
    }
    catch (error) {
      this.setState({ errorMessage: error })
    }
  }

  renderError = () => {
    return this.state.errorMessage
    ? (<div>{this.state.errorMessage.toString()}</div>)
    :(<div></div>)
  }

  componentDidMount() {
    //this.testPromises()
    this.getShows()
  }

  render() {

    return (
      <Router>
        <div className="App">
        {this.renderError()}
          <Switch>
            <Route exact path="/" component={() => <ViewShows allShows={this.state.shows} />} />
            <Route path="/manageShows" component={() => <ManageShows allShows={this.state.shows} createShow={this.postShow} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App
