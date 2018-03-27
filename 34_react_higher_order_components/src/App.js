import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Link, Route, withRouter } from 'react-router-dom';
import Login from './components/login';
import Logout from './components/logout';
import Labs from './components/labs';
import Grades from './components/grades';
import Instructors from './components/instructors';
import Notes from './components/notes';
import AuthStatus from './components/authstatus';
import withAuthentication from './components/withAuthentication';
import withAuthorization from './components/withAuthorization';

const LabsWithAuthentication = withRouter(withAuthentication(Labs));
const InstructorsWithAuthentication = withAuthentication(Instructors);

class App extends Component {

  constructor(props) {
    super(props);
    console.log(props)
    const EnhancedGrades = withAuthorization(withAuthentication(Grades), ["johann", "graham"], this.gatUserName());
    const EnhancedNotes = withAuthorization(withAuthentication(Notes), ["ashlee"], this.gatUserName())
  }

  state = {
    user: this.gatUserFromLocalStorage()
  };

  gatUserFromLocalStorage() {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch (e) {
      //whatever
    }
    return null;
  }

  gatUserName(){
    return this.state.user ? this.state.user.name : "";
  }

  logIn = (args) => {
    localStorage.setItem("user", JSON.stringify(args));
    this.setState({
      user: args
    }, () => {
      this.props.history.push('/')
    })
  }

  logOut = () => {
    localStorage.removeItem("user");
    this.setState({
      user: null
    }, () => {
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <AuthStatus user={ this.state.user } />
        </header>
        <aside>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/labs">Labs</Link></li>
            <li><Link to="/instructors">Instructors</Link></li>
            <li><Link to="/instructors/grades">Grades</Link></li>
            <li><Link to="/instructors/notes">Notes</Link></li>
          </ul>
        </aside>
        <div className="App-intro">
          <Switch>
            <Route path="/login">
              <Login logIn={ this.logIn } />
            </Route>
            <Route path="/logout">
              <Logout logOut={ this.logOut } />
            </Route>
            <Route path="/labs/" component={ LabsWithAuthentication } />
            <Route exact path="/instructors/" component={ InstructorsWithAuthentication } />
            <Route path="/instructors/grades" component={ EnhancedGrades } />
            <Route path="/instructors/notes" component={ EnhancedNotes } />
          </Switch>
        </div>
      </div>
    );
  }
}



export default App;
