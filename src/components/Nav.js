import React from 'react'
import { Link } from 'react-router-dom'
import { Hero, Container, Title, Tabs } from 'reactbulma'

function Navigation () {
    return (
        <div>
            <Hero small dark bold>
                <Hero.Body>
                    <Container hasTextCentered>
                        <Title>
                            HooDooMee
                        </Title>
                    </Container>
                </Hero.Body>
                <Hero.Foot>
                    <Tabs centered>
                        <Container>
                            <ul>
                                <Link to='/'>
                                    <li className="active">Home</li>
                                </Link>
                                <Link to='/search'>
                                    <li>Search</li>
                                </Link>
                                <Link to='/bookings'>
                                    <li>Bookings</li>
                                </Link>
                                <Link to='/favorites'>
                                    <li>Favorites</li>
                                </Link>
                                <Link to='/settings'>
                                    <li>Settings</li>
                                </Link>
                            </ul>
                        </Container>
                    </Tabs>
                </Hero.Foot>
            </Hero>
        </div>
    )
}

export default Navigation





