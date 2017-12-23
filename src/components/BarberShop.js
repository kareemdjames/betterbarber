import React from 'react'
import Navigation from './Nav'
import BarberShopCard from './BarberShopCard'
import BarberCard from './BarberCard'

function Barbershop() {
    return (
        <div>
            <Navigation />
            <BarberShopCard />
            <BarberCard />
        </div>
    )
}

export default Barbershop