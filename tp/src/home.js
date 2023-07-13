import React from "react"   
import Catalogo from './catalogo';
import CarouselF from './carousel';
import Banner from "./banner";



function Home () {
    return (
        <div>
            <Banner />
            <CarouselF />
            <Catalogo />
        </div>
    )
}

export default Home