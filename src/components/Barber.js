import React from 'react'
import Navigation from './Nav'
import BarberCard from './BarberCard'
import { Section, Container, Level, Image, Content, Button } from 'reactbulma'

function Barber() {

    return(
        <div>
            <Navigation />
            <BarberCard />
            <Section small>
                <Container>
                    <Level mobile>
                        <Level.Left>
                            <Level.Item hasTextCentered>
                                <Image is='128x128' src='http://bulma.io/images/placeholders/128x128.png' />
                            </Level.Item>
                            <Level.Item hasTextCentered>
                                <Image is='128x128' src='http://bulma.io/images/placeholders/128x128.png' />
                            </Level.Item>
                            <Level.Item hasTextCentered>
                                <Image is='64x64' src='http://bulma.io/images/placeholders/128x128.png' />
                            </Level.Item>
                        </Level.Left>
                    </Level>
                </Container>
            </Section>
            <Section small>
                <Level mobile>
                    <Level.Left>
                        <Level.Item>
                            <Content>
                                <h1>Queue</h1>
                            </Content>
                        </Level.Item>
                    </Level.Left>
                    <Level.Right>
                        <Level.Item>
                            <Button large danger>Join Queue</Button>
                        </Level.Item>
                    </Level.Right>
                </Level>
            </Section>
        </div>
    )
}

export default Barber