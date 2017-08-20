import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Tile from 'grommet/components/Tile';
import ResourcesIcon from 'grommet/components/icons/base/Resources';
import AccessibleIcon from
  'grommet/components/icons/base/Accessible';
import ConfigureIcon from 'grommet/components/icons/base/Configure';
import RunIcon from 'grommet/components/icons/base/Run';
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline';
import Button from 'grommet/components/Button';
import Headline from 'grommet/components/Headline';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Hero from 'grommet/components/Hero';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Label from 'grommet/components/Label';
import Value from 'grommet/components/Value';
import Quote from 'grommet/components/Quote';
import Tiles from 'grommet/components/Tiles';
import Paragraph from 'grommet/components/Paragraph';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Animate from 'grommet/components/Animate';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Meter from 'grommet/components/Meter';

import PlatformReactjsIcon from 'grommet/components/icons/base/PlatformReactjs';
import StandardsHtml5Icon from 'grommet/components/icons/base/StandardsHtml5';
import SatelliteIcon from 'grommet/components/icons/base/Satellite';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import UserManager from 'grommet/components/icons/base/UserManager';
import CalendarIcon from 'grommet/components/icons/base/Calendar';
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin';
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub';
import SocialCodepenIcon from 'grommet/components/icons/base/SocialCodepen';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import BrandGrommetPathIcon from 'grommet/components/icons/base/BrandGrommetPath';
import StarIcon from 'grommet/components/icons/base/Star';
import SVGIcon from 'grommet/components/SVGIcon'

import Scroll from 'react-scroll'; // Imports all Mixins
import { scroller } from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()
import Typing from 'react-typing-animation';



// Or Access Link,Element,etc as follows
let Link = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

import { Motion, spring } from 'react-motion'
import Waypoint from 'react-waypoint';

const Rating = (props) => {
  const { count } = props;
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(<StarIcon size="large" />)

  }
  return <Box direction="row">{arr}</Box>;

}



const reactIcon = <SVGIcon colorIndex="plain" size="large" viewBox="0 0 128 128">
  <path fill="#00D8FF" d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
</SVGIcon>;

const html5icon = <SVGIcon colorIndex="plain" size="large">
  <svg viewBox="0 0 128 128">
    <path fill="#E44D26" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"></path>
  </svg>

</SVGIcon>;

const jsIcon = <SVGIcon colorIndex="plain" size="large">
  <svg viewBox="0 0 128 128">
    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
  </svg>
</SVGIcon>;

const cssIcon = <SVGIcon colorIndex="plain" size="large" >
  <svg viewBox="0 0 128 128">
    <path fill="#1572B6" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"></path>
  </svg>
</SVGIcon>

const WhyGrommetItem = (props) => (
  <Tile basis='medium' pad='small'>
    <Animate
      visible='scroll'
      keep={true}
      enter={{
        animation: 'slide-up',
        duration: 1000,
        delay: (props.delay || 100)
      }}>
      <Button href={props.href} path={props.path}>
        <Box pad={{
          between: 'small',
          vertical: 'small'
        }}>
          <Header direction='column' pad={{
            between: 'medium'
          }}>
            {props.icon}
            <Heading tag='h3' margin='none'>
              {props.heading}
            </Heading>
          </Header>
          <Box pad={{
            horizontal: 'medium'
          }}>
            {props.children}
          </Box>
        </Box>
      </Button>
    </Animate>
  </Tile>
);

export default class AboutMe extends Component {
  constructor() {
    super()

    this.state = {
      text: "", learning: {
        redux: {
          title:"Redux",
          icon: "./img/redux.png",
          progress: 0
        },
        GitHub: {
          title: "GitHub",
          icon: "./img/git.png",
          progress: 0
        },
        NodeJs: {
          title:"NodeJs",
          icon: "./img/nodejs.png",
          progress: 0
        },
        reactMotion: {
          title: "React-motion",
          icon: "./img/react.png",
          progress: 0
        },
        graphQl: {
          title:"GraphQl",
          icon: "./img/graphql.png",
          progress: 0
        },
        MobX: {
          title:"MobX",
          icon: "./img/mobX.jpg",
          progress: 0
        },
        
        
        
      

     } }
    this._changeTextEverySecond = this._changeTextEverySecond.bind(this);
    this._handleWaypointReach = this._handleWaypointReach.bind(this);
    this._onRatingDetails = this._onRatingDetails.bind(this);
    this._onLeave = this._onLeave.bind(this);
    this._initMeter = this._initMeter.bind(this);
    this._showMeter = this._showMeter.bind(this);


  }

  componentDidMount() {
    this.interval = setInterval(this._changeTextEverySecond.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _changeTextEverySecond() {
    const texts = ["Human", "Myself", "Happy", "Me"];
    let text = texts[Math.floor(Math.random() * texts.length)];
    this.setState({ text })

  }

  _handleWaypointReach(activeComponent, a) {
    // console.log(activeComponent)
    // console.log(a)
    this.props.onReachWayPoint(activeComponent, a)


  }

  _initMeter() {
    setTimeout(this._showMeter.bind(this), 1000);
    this._handleWaypointReach("learning")
   
  }
  _showMeter(){ 
     this.setState({ learning: {...this.state.learning, graphQl: {...this.state.learning.graphQl, progress: 20},
     reactMotion: {...this.state.learning.reactMotion, progress: 30}, GitHub: {...this.state.learning.GitHub, progress: 70},
    MobX: {...this.state.learning.MobX, progress: 20}, redux: {...this.state.learning.redux, progress: 80},
  NodeJs: {...this.state.learning.NodeJs, progress: 50}}})
  }

  //    learning: {
  //       graphQl: {
  //         icon: "./img/graphql.png",
  //         progress: 0
  //       },
  //       MobX: {
  //         icon: "./img/mobx.jpg",
  //         progress: 0
  //       },
  //       reactMotion: {
  //         icon: "./img/react.png",
  //         progress: 0
  //       },
  //       GitHub: {
  //         icon: "./img/git.png",
  //         progress: 0
  //       },
  // }

  _onRatingDetails() {
    
  }

  _onLeave(prop) {

    return (prop.currentPosition === "below") ? this._handleWaypointReach("about") : null;
  }





  render() {

    return (
      // <ScrollIntoView id={this.props.location.hash}>
      <Article scrollStep={false}>

        <Section full={true} id="about" colorIndex="light-2" justify="center" align="center" separator="top">
          <Waypoint
            onEnter={this._handleWaypointReach.bind(this, "about")}
          />

          <Heading alignSelf="start" tag='h2' strong={true}>Who am I?</Heading>

          <Animate
            visible={true}
            keep={true}
            enter={{
              animation: 'fade',
              duration: 1000,
              delay: 100
            }}>

            <Quote pad={{ between: "small" }} margin="none" borderColorIndex="light-1" full="horizontal" >
              <Box pad="none" direction="row" responsive={false}>
                <Box
                  size="xlarge"
                  align="center"
                  justify="between"

                  style={{
                    backgroundColor: 'rgba(0,0,0, 0.1)',

                  }}
                  pad="small">
                  {/* <UserManager size="large" colorIndex="grey-1"/> */}

                  <Box align="start">
                    <Box alignSelf="start" ><Image
                      style={{
                        width: 60 + "px",
                        height: 60 + "px",
                        'borderRadius': 50 + "%",
                        'boxShadow': '0px 0px 0px 3px rgba(0,0,0,0.5)'
                      }}
                      src='./img/tmk.png'
                      full={false}
                      size='thumb' /></Box>
                    <Label margin="none" size="medium" uppercase={true}>Tomasz</Label>
                    <Heading tag='h2' strong={true}>Trzaskoma</Heading>
                    <Box direction="row" responsive={false}>
                      <Anchor href="https://github.com/przytrzask" target="_blank" icon={<SocialGithubIcon colorIndex="plain" />} />
                      <Anchor href="https://www.linkedin.com/in/tomasz-trzaskoma-a37557b5/" target="_blank" icon={<SocialLinkedinIcon colorIndex="plain" />} />
                      <Anchor href="https://codepen.io/przytrzask/" target="_blank" icon={<SocialCodepenIcon colorIndex="plain" />} />
                      <Anchor href="https://www.facebook.com/TrzasQ" target="_blank" icon={<SocialFacebookIcon colorIndex="plain" />} />
                    </Box>
                    <Box margin="small">
                      <Paragraph pad="none">Rising React/FrontEnd developer
                    </Paragraph>
                    </Box>
                  </Box>


                </Box>
                <Box style={{ overFlow: "scroll" }} colorIndex="light-1" pad="small">
                  <Paragraph style={{ fontSize: 15 + 'px' }} margin="none" align="start">
                    I am Internet enthusiast, sports lover with programing passion. Graduate of
                  Software Dvelopment Acadamy bootcamp. Trying to jump at the chance and develop
                  myself as front-end developer. I am Living in Tricity for 4 years and
                  finally have started to learn kitesurfing. I want to use big motivation and ambition to realize
                  fresh ideas and my desire to create. My experience in various works makes me
                  able to fit in every situation
                </Paragraph>
                </Box>
              </Box>

            </Quote>
          </Animate>
          <Waypoint
            onEnter={this._handleWaypointReach.bind(this, "about")}
          />
        </Section>

        <Section id="ability" separator='top' align="center">
          <Waypoint
            onEnter={this._handleWaypointReach.bind(this, "ability")}
            onLeave={this._onLeave}
          />

          <Heading tag='h2' strong={true}>What makes me  <Typing speed={50} className="inline" loop={true}>
            <span style={{ display: "inline" }}>{this.state.text}</span>
            <Typing.Backspace speed={-1} delay={2000} />
          </Typing></Heading>

          <Tiles justify='center' pad={{
            vertical: 'medium'
          }}>
            <WhyGrommetItem
              icon={< SatelliteIcon colorIndex='neutral-1' size='large' />}
              heading='Curiousity'
              href='#'
              delay={100}>
              <Paragraph align='center' margin='none'>
                I am curious about the world the same as bout new technologies. That keeps me on the path.

                </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem
              icon={< RunIcon colorIndex='neutral-1' size='large' />}
              heading='Activity'
              href='#'
              delay={300}>
              <Paragraph align='center' margin='none'>
                Trying to be active and proactive in whole life not only ICT technologies but also in sports and social activities.
                </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem
              icon={< ConfigureIcon colorIndex='neutral-1' size='large' />}
              heading='Flexiblility'
              href="#"
              delay={500}>
              <Paragraph align='center' margin='none'>
                My experience in various places makes me fit in every situation.
                </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem
              icon={< AccessibleIcon colorIndex='neutral-1' size='large' />}
              heading='Training'
              href="#"
              delay={700}>
              <Paragraph align='center' margin='none'>
                Practice makes champions. Trying to learn/train to improve everyday.
                </Paragraph>
            </WhyGrommetItem>
          </Tiles>
        </Section>


        <Section id="technologies" separator='top' align="center">
          <Waypoint
            onEnter={this._handleWaypointReach.bind(this, "technologies")}
          />
          <Heading tag='h2' strong={true}>Technologes I am into</Heading>
          <Tiles justify='center' pad={{
            vertical: 'medium'
          }}>
            <WhyGrommetItem
              icon={
                html5icon}
              heading='Html/Jsx'
              href="#"
              delay={100}>
              <Paragraph align='center' margin='none'>
                Using html5 with no pain but prefer Jsx since it is more powerfull

              </Paragraph>
            </WhyGrommetItem>
           

            <WhyGrommetItem
              onMouseOver={this._onRatingDetails}
              icon={jsIcon}
              heading='JavaScript/Es6'
              href="#"
              delay={500}>
              <Paragraph align='center' margin='none'>
                Started in ES5 times. Switched to ES6. Can't live without spread operator now. Really 💖 ES6
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem
              icon={cssIcon}
              heading='Css/Sass'
              href="#"
              delay={700}>
              <Paragraph align='center' margin='none'>
                Once disliked. Now like it much more due to flexbox capabilities 💪
              </Paragraph>
            </WhyGrommetItem>
             <WhyGrommetItem
              icon={reactIcon}
              heading='React'
              href="#"
              delay={300}>
              <Paragraph align='center' margin='none'>
                The best framework now creating interactive UIs is painless.
                Have a lot of fun with it 😂
              </Paragraph>
            </WhyGrommetItem>





          </Tiles>

        </Section>
        <Section id="learning" separator='top' align="center">
          <Waypoint
            onEnter={this._initMeter}
          />
          <Heading tag='h2' strong={true}>Learning curve</Heading>
          <List style={{ overflow: "hidden" }}>

            {
              Object.keys(this.state.learning).map(item => {
                
                return (
                  <Animate
                    key={item}
                    visible='scroll'
                    keep={true}
                    enter={{
                      animation: 'slide-up',
                      duration: 1000,
                      delay: 100
                    }}><ListItem align="center" justify="between"
                      pad={{ horizontal: 'medium', vertical: 'medium', between: 'medium' }}>
                      <Box align="center" direction="row">
                        <Image src={this.state.learning[item].icon}
                          size='thumb' />{this.state.learning[item].title}

                      </Box>
                      <Box>
                        <Meter max={100} onActive={()=>{return}} size="small"
                          value={this.state.learning[item].progress}
                          a11yTitle="Progress bar" />
                        <Value align="start" size="small"
                          value={this.state.learning[item].progress} units="%" />
                      </Box>

                    </ListItem></Animate>)
              })
            }

          </List>

        </Section>

      </Article>
      // </ScrollIntoView>
    )
  }

}