import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route, Switch,
  Link
} from 'react-router-dom'
import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import { NavLink } from 'react-router-dom'

import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Contact from './components/Contact'

export default class BasicApp extends Component {

  constructor() {
    super();

    // this._isActive = this._isActive.bind(this);


  }

  _isActive(match, location) {
    console.log(match)
    console.log(location)
    return false

  }
  render() {
    return (
      <Router >
      <App centered={false}>
        <Split fixed={true} flex='right'>
          <Sidebar size="small" full={true} colorIndex="neutral-1">
            <Header pad='medium'
              justify='between'>
              <Title>
                TrzasQ
              </Title>
            </Header>
            <Box flex='grow'
              justify='start'>
              <Menu primary={true}>
                <NavLink exact to="/">
                  About
                </NavLink>
                <NavLink isActive={this._isActive} exact to="#second">
                  Contact
                </NavLink>
                <NavLink isActive={this._isActive}  to="#ability">
                  Ability
                </NavLink>
                
              </Menu>
            </Box>
          </Sidebar>
          <Box>
           
          <Route exact path="/" component={AboutMe} />
          <Route  path="second" component={AboutMe} />
          <Route   path="ability" component={AboutMe} />
          </Box>
        </Split>
      </App>
      </Router>
    );
  }
}
