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

import Scroll from 'react-scroll'; // Imports all Mixins
import { scroller } from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()
import Typing from 'react-typing-animation'


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
for (let i =0; i < count; i++) {
  arr.push(<StarIcon size="large" />)
  
}
return <Box direction="row">{arr}</Box>;

}

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

    this.state = { text: "" }
    this._changeTextEverySecond = this._changeTextEverySecond.bind(this);
    this._handleWaypointReach = this._handleWaypointReach.bind(this);
    this._onRatingDetails = this._onRatingDetails.bind(this);


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
    this.props.onReachWayPoint(activeComponent, a)


  }

  _onRatingDetails() {
    console.log("sdf"
    )
  }





  render() {

    return (
      // <ScrollIntoView id={this.props.location.hash}>
      <Article scrollStep={false}>
        <Waypoint
          key="about"
          onEnter={this._handleWaypointReach.bind(this, "about")}
        />
        <Section flex={true} id="about" colorIndex="light-2" justify="center" align="center" separator="top">

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
              <Box pad="none" direction="row">
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
                      src='/img/tmk.png'
                      full={false}
                      size='thumb' /></Box>
                    <Label margin="none" size="medium" uppercase={true}>Tomasz</Label>
                    <Heading tag='h2' strong={true}>Trzaskoma</Heading>
                    <Box direction="row">
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
                <Box colorIndex="light-1" pad="small">
                  <Paragraph margin="none" align="start">
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
        </Section>

        <Section id="ability" separator='top' align="center">
          <Waypoint
            key="about"
            onEnter={this._handleWaypointReach.bind(this, "ability")}
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


        <Section id="contact" separator='top' align="center">
          <Waypoint
            key="about"
            onEnter={this._handleWaypointReach.bind(this, "contact")}
          />
          <Heading tag='h2' strong={true}>Technologes I am into</Heading>
          <Tiles justify='center' pad={{
            vertical: 'medium'
          }}>
          <WhyGrommetItem
            icon={
              <StandardsHtml5Icon size="large" colorIndex='brand' />}
            heading='Html/Jsx'
            href="#"
            delay={100}>
            <Paragraph align='center' margin='none'>
              
              </Paragraph>
          </WhyGrommetItem>
          <WhyGrommetItem
            icon={< PlatformReactjsIcon size="large" colorIndex='brand' />}
            heading='React'
            href="#"
            delay={100}>
            <Paragraph align='center' margin='none'>
              The best framework now creating interactive UIs is painless.
              </Paragraph>
          </WhyGrommetItem>
          
          <WhyGrommetItem
            onMouseOver={this._onRatingDetails}
            icon={<BrandGrommetPathIcon  size="large" colorIndex='brand' />}
            heading='Grommet'
            href="#"
            delay={100}>
            <Paragraph align='center' margin='none'>
              Cool stuff. New approach to Ux design for enterprise apps. On top of react indeed.
              </Paragraph>
          </WhyGrommetItem>
          <WhyGrommetItem
            icon={<Rating count={5} />}
            heading='Grommet'
            href="#"
            delay={100}>
            <Paragraph align='center' margin='none'>
              Cool stuff. New approach to Ux design for enterprise apps. On top of react indeed.
              </Paragraph>
          </WhyGrommetItem>
          
          
            
          

          </Tiles>

        </Section>

      </Article>
      // </ScrollIntoView>
    )
  }

}