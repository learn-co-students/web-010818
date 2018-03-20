import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch, Link } from 'react-router-dom'


// import Home from './Home.js'
import { NotFound } from './NotFound.js'
import { Scary } from './spice-girls/Scary.js'
import Baby from './spice-girls/Baby.js'
import { Ginger } from './spice-girls/Ginger.js'
import { Posh } from './spice-girls/Posh.js'
import { Sporty } from './spice-girls/Sporty.js'
import SpiceGirl from "./SpiceGirl"

class App extends Component {

  constructor(){
    super()
    this.routeRender = this.routeRender.bind(this)
  }

  state = {
    spiceGirls: [
      {
        adjective: "Scary",
        gif: "https://media.giphy.com/media/Eaa3LF8anrRm/giphy.gif",
        path: "mel-b",
        component: Scary
      },
      {
        adjective: "Baby",
        gif: "https://media.giphy.com/media/Eaa3LF8anrRm/giphy.gif",
        path: "emma-b",
        component: Baby
      },
      {
        adjective: "Ginger",
        gif: "https://media.giphy.com/media/Eaa3LF8anrRm/giphy.gif",
        path: "geri-haliwell",
        component: Ginger
      },
      {
        adjective: "Posh",
        gif: "https://media.giphy.com/media/Eaa3LF8anrRm/giphy.gif",
        path: "victoria-b",
        component: Posh
      },
      {
        adjective: "Sporty",
        gif: "https://media.giphy.com/media/Eaa3LF8anrRm/giphy.gif",
        path: "mel-c",
        component: Sporty
      },
    ]
  }


  buildSidebar = () => {
    return this.state.spiceGirls.map((spice) => {
      return (<li>
        <Link to={ "/spice-girls/" + spice.path }>{ spice.adjective }</Link>
      </li>)
    });
  }

  routeRender(renderProps) {
    const spiceSlug = renderProps.match.params.slug;

    const spiceInQuestion = this.state.spiceGirls.find((spice) => {
      return spice.path == spiceSlug;
    })

    return <SpiceGirl gif={ spiceInQuestion.gif } adjective={ spiceInQuestion.adjective } />
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Spice Force Five</h1>
          <aside className="sidebar">
            <ul>
              { this.buildSidebar() }
            </ul>
          </aside>
          <Switch>
            <Route path="/spice-girls/:slug" exact render={ this.routeRender } />
            <Route path="/spice-girls/:slug/like" exact render={ this.routeRender } />
            <Route component={ NotFound } />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
