import React from 'react';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';


export default function Footer() {

    return (
        <div className="flex justify-content-center text-center py-4 px-4 mx-0 mt-8 lg:mx-8"> {/* pie de página y texto centrado y responsive */}
            <div className="col-12 md:col-10 lg:col-7">
                <div className="grid md:text-left"> {/* sistema de gird de PrimeReact */}
                <Divider /> {/* PrimeReact */}
                    <div className="col-12 md:col-2 mt-2 md:mt-0 text-center"> {/* Botón e iconos de PrimeReact dentro de un <a/> */}               
                        <a className="line-height-3 mb-2" href='/'><Button icon="pi pi-home" label='Inicio' rounded text severity="secondary" aria-label="Inicio" /></a>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0 text-center">
                        <a className="line-height-3 mb-2" href='/listadoDeProductos'><Button icon="pi pi-apple" label='Productos' rounded text severity="secondary" aria-label="Productos" /></a>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0 text-center">
                        <a className="line-height-3 mb-2" href='/proveedores'><Button icon="pi pi-users" label='Proveedores' rounded text severity="secondary" aria-label="Proveedores" /></a>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0 text-center">
                        <a className="line-height-3 mb-2" href='/clientes'><Button icon="pi pi-user-plus" label='Clientes' rounded text severity="secondary" aria-label="Clientes" /></a>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0 text-center">
                        <a className="line-height-3 mb-2" href='/Pedidos'><Button icon="pi pi-shopping-cart" label='Pedidos' rounded text severity="secondary" aria-label="Pedidos" /></a>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0 text-center">
                        <a className="line-height-3 mb-2" href='/'><Button icon="pi pi-chart-bar" label='Reportes' rounded text severity="secondary" aria-label="Reportes" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


