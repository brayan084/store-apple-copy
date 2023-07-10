import React from 'react';
import { Button } from 'primereact/button';

export default function Banner() {

    return (
        <div
            id="hero"
            className="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
            style={{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #d5b0f5 0%, #9cbdf0 100%)', clipPath: 'ellipse(150% 87% at 93% 13%)' }}
        >
            <div className="mx-4 md:mx-8 mt-0 md:mt-4">
                <h1 className="text-6xl font-bold text-gray-900 line-height-2">
                    <span className="font-light block">Impulsamos</span>La Innovación
                </h1>
                <p className="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">Haga realidad sus ideas más brillantes e impulse la creatividad continua con tecnología inteligente.</p>
                <Button type="button" label="Catálogo" rounded className="mt-3 font-normal bg-blue-900 px-3 text-white"></Button>
            </div>
            <div className="flex justify-content-center md:justify-content-end">
                <img src="https://i.ibb.co/FgQZfkB/screen-1.png" alt="Hero" className="w-9 md:w-auto" />
            </div>
        </div>
    )
}