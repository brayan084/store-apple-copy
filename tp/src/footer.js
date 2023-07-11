import React from 'react';
import { Divider } from 'primereact/divider';


export default function Footer() {

    return (
        <div className="flex justify-content-center text-center py-4 px-4 mx-0 mt-8 lg:mx-8">
            <div className="col-12 md:col-10 lg:col-7">
                <div className="grid md:text-left">
                <Divider />
                    <div className="col-12 md:col-2 mt-2 md:mt-0 text-center">
                        <a className="line-height-3 mb-2" href='/'><i className="pi pi-home" /> Inicio</a>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0 text-center">
                        <a className="line-height-3 mb-2" href='/listadoDeProductos'><i className="pi pi-apple" /> Productos</a>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0 text-center">
                        <a className="line-height-3 mb-2" href='/'><i className="pi pi-users" /> Proveedores</a>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0 text-center">
                        <a className="line-height-3 mb-2" href='/'><i className="pi pi-user-plus" />  Clientes</a>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0 text-center">
                        <a className="line-height-3 mb-2" href='/'><i className="pi pi-shopping-cart" /> Pedidos</a>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0 text-center">
                        <a className="line-height-3 mb-2" href='/'><i className="pi pi-chart-bar" /> Reportes</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


