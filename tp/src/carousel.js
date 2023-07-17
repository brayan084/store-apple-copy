import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { FotosCarrusel } from './fotosCarrusel';

export default function CarouselF() {  
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    useEffect(() => {
        FotosCarrusel.getProductsSmall().then((data) => setProducts(data.slice(0, 6)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="text-center my-4">
                <div> {/* Trae las imagenes de mi array de objetos y su nombre como texto alternativo */}
                    <img src={`https://i.ibb.co/${product.imagen}`} alt={product.nombre} className="w-11 shadow-2 border-round" />
                </div>
            </div>
        );
    };

    return (
        <div style={{ marginTop: '5rem', marginBottom: '5rem' }}> {/* Del carrusel original de PrimeReact solo se utilizó la imagen, se cambiaron el tamaño de las mismas y la distancia entre ellas */}
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} circular
                autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
    )
}
