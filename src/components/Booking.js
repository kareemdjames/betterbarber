import React from 'react'
import Navigation from './Nav'
import BarberCard from './BarberCard'
import { Content, Container, Section } from 'reactbulma'

function Booking() {

    return(
        <div>
            <Navigation />
            <Section>
                <Container hasTextCentered>
                    <Content>
                        <h1>Current Booking</h1>
                    </Content>
                </Container>
            </Section>
            <BarberCard/>
        </div>
    )
}

export default Booking