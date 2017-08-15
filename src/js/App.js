import React, { Component } from 'react';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';

import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Contact from './components/Contact'
import Scrollspy from 'react-scrollspy'

import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()


// Or Access Link,Element,etc as follows
let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

export default class BasicApp extends Component {

  constructor() {
    super();

        this._onReachWayPoint = this._onReachWayPoint.bind(this);

        this.state = { activeNavTab: "" }


    // this._isActive = this._isActive.bind(this);


  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  _onReachWayPoint(prop,a) {
    console.log(prop);
    console.log(a);
    
    this.setState( (state) => ({activeNavTab: prop}) )
  }

  
  render() {
    return (
      <App centered={false}>
        <Split fixed={true} flex='right'>
          <Sidebar size="small" full={true} colorIndex="neutral-1">
            <Header pad='medium'
              justify='between'>
              <Title>
                TrzasQ
              </Title>
            </Header>
            <Menu  primary={true} >
                <Anchor onClick={this._onReachWayPoint.bind(this, "about")}  className={(this.state.activeNavTab === 'about') ? 'active' : '' } href="#about">
                  About
                </Anchor>
                 <Anchor onClick={this._onReachWayPoint.bind(this, "ability")}  className={(this.state.activeNavTab === 'ability') ? 'active' : '' } href="#ability">
                  Abilities
                </Anchor>
                <Anchor onClick={this._onReachWayPoint.bind(this, "contact")}  href="#contact" className={(this.state.activeNavTab === 'contact') ? 'active' : '' } >
                  Features
                </Anchor>
               
                </Menu>
                
          </Sidebar>
          <Box>
           
          <AboutMe onReachWayPoint={this._onReachWayPoint} onScroll={()=>{console.log("sdf")}} />
          </Box>
        </Split>
      </App>
    );
  }
}
