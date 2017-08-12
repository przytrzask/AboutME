import React, {Component} from 'react';
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
import SatelliteIcon from 'grommet/components/icons/base/Satellite';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import UserManager from 'grommet/components/icons/base/UserManager';
import CalendarIcon from 'grommet/components/icons/base/Calendar';
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin';
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub';
import SocialCodepenIcon from 'grommet/components/icons/base/SocialCodepen';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';

import {ScrollIntoView} from 'rrc';
import {Motion, spring} from 'react-motion'

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

    this.state = { text: ""}
    this._changeTextEverySecond = this._changeTextEverySecond.bind(this);


  }

  componentDidMount() {
   this.interval = setInterval(this._changeTextEverySecond.bind(this), 1000);
  }
  componentWillUnmount() {
        clearInterval(this.interval);
    }

  _changeTextEverySecond() {
    const texts = ["Human", "Myself", "Happy"];
    let text =  texts[Math.floor(Math.random()*texts.length)];
    this.setState({ text })
    
  }



  render() {

    return (
      <ScrollIntoView id={this.props.location.hash}>
        <Article scrollStep={false}>

          <Section  colorIndex="light-2" justify="center" align="center" separator="top">
            <Heading alignSelf="start" tag='h2' strong={true}>Who am I?</Heading>
            <Animate
              visible={true}
              keep={true}
              enter={{
              animation: 'fade',
              duration: 1000,
              delay: 100
            }}>
              <Quote pad={{between: "small"}} margin="none" borderColorIndex="light-1"  full="horizontal" >
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
                    size='thumb'/></Box>
                    <Label margin="none" size="medium" uppercase={true}>Tomasz</Label>
                    <Heading tag='h2' strong={true}>Trzaskoma</Heading>
                    <Box direction="row">
                    <Anchor icon={<SocialGithubIcon colorIndex="plain" />} />
                    <Anchor icon={<SocialLinkedinIcon colorIndex="plain" />} />
                    <Anchor icon={<SocialCodepenIcon colorIndex="plain" />} />
                    <Anchor href="" icon={<SocialFacebookIcon colorIndex="plain" />} />
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
                  finally have started learn kitesurfing. I want to use big motivation and ambition to realize
                  fresh ideas and my desire to create. My experience in various works makes me
                  able to fit in every situation
                </Paragraph>
                </Box>
                </Box>

              </Quote>
            </Animate>
          </Section>

          <Section id="ability" separator='top' align="center">
            <Heading tag='h2' strong={true}>What makes me</Heading>
            <Paragraph align='center'>
              <Animate
      visible='scroll'
      keep={true}
      enter={{
      animation: 'slide-up',
      duration: 1000,
      delay: 100
    }}>
              {this.state.text}
      
    </Animate>
            </Paragraph>
            <Tiles justify='center' pad={{
              vertical: 'medium'
            }}>
              <WhyGrommetItem
                icon={< SatelliteIcon colorIndex = 'neutral-1' size = 'large' />}
                heading='Curious'
                path='#'
                delay={100}>
                <Paragraph align='center' margin='none'>
                  I am curious about the world the same as bout new technologies. That keeps me on the path.
                  
                </Paragraph>
              </WhyGrommetItem>
              <WhyGrommetItem
                icon={< RunIcon colorIndex = 'neutral-1' size = 'large' />}
                heading='Active'
                href='#'
                delay={300}>
                <Paragraph align='center' margin='none'>
                  Trying to be active and proactive in whole life not only ICT technologies but also in sports and social activities.
                </Paragraph>
              </WhyGrommetItem>
              <WhyGrommetItem
                icon={< ConfigureIcon colorIndex = 'neutral-1' size = 'large' />}
                heading='Flexible'
                path='/docs/learn'
                delay={500}>
                <Paragraph align='center' margin='none'>
                  My experience in various caompanys makes me fit in every situation.
                </Paragraph>
              </WhyGrommetItem>
              <WhyGrommetItem
                icon={< AccessibleIcon colorIndex = 'neutral-1' size = 'large' />}
                heading='Abilities'
                href="#"
                delay={700}>
                <Paragraph align='center' margin='none'>
                  All users matter. Grommet provides a robust foundation of accessibility features
                  to meet web standards.
                </Paragraph>
              </WhyGrommetItem>
            </Tiles>
          </Section>
          <Section separator='top' align="center">
            <Heading tag='h2' strong={true}>Technologes I am into</Heading>
            <WhyGrommetItem
              icon={< PlatformReactjsIcon size="large" colorIndex = 'brand' />}
              heading='Abilities'
              href="#"
              delay={100}>
              <Paragraph align='center' margin='none'>
                All users matter. Grommet provides a robust foundation of accessibility features
                to meet web standards.
              </Paragraph>
            </WhyGrommetItem>

            <Tiles justify='center' pad={{
              vertical: 'medium'
            }}></Tiles>
          </Section>

        </Article>
      </ScrollIntoView>
    )
  }

}