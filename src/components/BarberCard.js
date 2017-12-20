import React from 'react'
import { Section, Media, Image, Content, Level, Container, Box } from 'reactbulma'

function BarberCard() {

    return (
        <Section>
            <Container>
                <Box>
                    <Media>
                        <Media.Left>
                            <Image is='64x64' src='http://bulma.io/images/placeholders/128x128.png' />
                        </Media.Left>
                        <Media.Content>
                            <Content>
                                <p>
                                    <strong>Barber Name</strong>
                                </p>
                                <Level mobile>
                                    <Level.Left>
                                        <Level.Item>
                                            <Content>
                                                <p>Catch the best fade in the city!!</p>
                                            </Content>
                                        </Level.Item>
                                    </Level.Left>
                                </Level>
                            </Content>
                        </Media.Content>
                    </Media>
                </Box>
            </Container>
        </Section>
    )
}

export default BarberCard