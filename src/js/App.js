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
  render() {
    console.log(this.context)
    return (
      <Router >
      <App centered={false}>
        <Split fixed={true} flex='right'>
          <Sidebar size="small" full={true} colorIndex="brand">
            <Header pad='medium'
              justify='between'>
              <Title>
                TrzasQ
              </Title>
            </Header>
            <Box flex='grow'
              justify='start'>
              <Menu primary={true}>
                <NavLink exact to="#first">
                  About
                </NavLink>
                <NavLink exact to="#second">
                  Contact
                </NavLink>
                
              </Menu>
            </Box>
          </Sidebar>
          <Box>
           
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/second" component={AboutMe} />
          </Box>
        </Split>
      </App>
      </Router>
    );
  }
}
