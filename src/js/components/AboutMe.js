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
import Heading from 'grommet/components/Heading';
import Value from 'grommet/components/Value';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import UserManager from 'grommet/components/icons/base/UserManager';
import CalendarIcon from 'grommet/components/icons/base/Calendar';
import Quote from 'grommet/components/Quote';
import Tiles from 'grommet/components/Tiles';
import Paragraph from 'grommet/components/Paragraph';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Animate from 'grommet/components/Animate';
import { ScrollIntoView } from 'rrc';
import { Motion, spring } from 'react-motion'

const WhyGrommetItem = (props) => (
    <Tile basis='medium' pad='small'>
        <Animate visible='scroll' keep={true}
            enter={{
                animation: 'slide-up', duration: 1000,
                delay: (props.delay || 100)
            }}>
            <Button href={props.href} path={props.path}>
                <Box pad={{ between: 'small', vertical: 'small' }}>
                    <Header direction='column' pad={{ between: 'medium' }}>
                        {props.icon}
                        <Heading tag='h3' margin='none'>
                            {props.heading}
                        </Heading>
                    </Header>
                    <Box pad={{ horizontal: 'medium' }}>
                        {props.children}
                    </Box>
                </Box>
            </Button>
        </Animate>
    </Tile>
);


export default class AboutMe extends Component {

    componentDidMount() {
        // var element = document.getElementById("second");

        // element.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    render() {



        return (
            <ScrollIntoView id={this.props.location.hash}>
                <Box>

                    <Section colorIndex="light-2" pad="large" full={true} justify="center" align="center">
                        <Box direction="column" alignContent="center">
                            <Headline size="medium">Who am I?</Headline>

                        </Box>
                        <Box pad={{ vertical: "medium", between: "medium" }} direction="row"
                            justify="start" align="center">
                            <UserManager size="large" colorIndex="grey-1" />
                            <Headline margin="none" size="small">Tomek Trzaskoma</Headline>


                        </Box>
                        <Box direction="row" responsive={false} align="center" wrap={true}>
                            <Value
                                value={1986}
                                colorIndex="grey-1"
                                size="small"
                                trendIcon={<LinkNext colorIndex="grey-1" style={{ marginLeft: '10px' }} />}
                            />
                            <CalendarIcon type="logo" />

                        </Box>
                    </Section>
                    <Motion defaultStyle={{ x: 5 }} style={10}>
                        {interpolatingStyle =>
                            <Animate visible='scroll' keep={true}
          enter={{ animation: 'fade', duration: 1000, delay: 100 }}><Section id="second" pad="large" justify="center" align="center">
                                <Quote credit='trzasQ'
                                    size='large'>
                                    <Paragraph>
                                        I am Internet
enthusiast, sports lover with
programing passion. Graduate
of Software Dvelopment
Acadamy bootcamp. Trying to
jump at the chance and develop
myself as front-end developer.
I am Living in Tricity for 4
years and want to finally learn
kitesurfing. I want to use big
motivation and ambition to realize
fresh ideas and my desire
to create. My experience in
various works makes me able
to fit in every situation
  </Paragraph>

                                </Quote>
                            </Section></Animate>}

                    </Motion>
                    <Section separator='top' align="center" animate={true}>
                        <Heading tag='h2' strong={true}>What makes us great</Heading>
                        <Paragraph align='center'>
                            Grommet is designed to make your design and dev process easier
            by baking in the stuff that is expected.
          </Paragraph>
                        <Tiles justify='center'
                            pad={{ vertical: 'medium' }}>
                            <WhyGrommetItem icon={<ResourcesIcon colorIndex='brand'
                                size='large' />}
                                heading='Comprehensive' path='/docs/components' delay={100}>
                                <Paragraph align='center' margin='none'>
                                    A curated design and development platform that is more than
                just a ReactJS widget library. Grommet offers the tools
                to create amazing experiences.
              </Paragraph>
                            </WhyGrommetItem>
                            <WhyGrommetItem icon={<RunIcon colorIndex='brand'
                                size='large' />}
                                heading='Active' href='http://slackin.grommet.io' delay={300}>
                                <Paragraph align='center' margin='none'>
                                    Our community is open and engaged. Design resources,
                development tools, and online training provide a seamless
                onboarding experience.
              </Paragraph>
                            </WhyGrommetItem>
                            <WhyGrommetItem icon={<ConfigureIcon colorIndex='brand'
                                size='large' />}
                                heading='Flexible' path='/docs/learn' delay={500}>
                                <Paragraph align='center' margin='none'>
                                    Responsive web without the hassle of grid management and
                modular components loaded on demand. Themes allow your
                brand to shine.
              </Paragraph>
                            </WhyGrommetItem>
                            <WhyGrommetItem icon={<AccessibleIcon colorIndex='brand'
                                size='large' />}
                                heading='Accessible' href='https://vimeo.com/187068246'
                                delay={700}>
                                <Paragraph align='center' margin='none'>
                                    All users matter. Grommet provides a robust foundation
                of accessibility features to meet web standards.
              </Paragraph>
                            </WhyGrommetItem>
                        </Tiles>
                    </Section>


                </Box>
            </ScrollIntoView>
        )
    }

}