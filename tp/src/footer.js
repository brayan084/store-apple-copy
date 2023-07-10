import React from 'react';
import { Divider } from 'primereact/divider';


export default function Footer() {

    return (
        <div className="flex justify-content-center text-center py-4 px-4 mx-0 mt-8 lg:mx-8">
            <div className="col-12 md:col-10 lg:col-7">
                <div className="grid md:text-left">
                <Divider />
                    <div className="col-12 md:col-2 mt-2 md:mt-0">
                        <h4 className="line-height-3 mb-2 text-center"><i className="pi pi-home" /> Inicio</h4>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0">
                        <h4 className="line-height-3 mb-2 text-center"><i className="pi pi-apple" /> Productos</h4>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0">
                        <h4 className="line-height-3 mb-2 text-center"><i className="pi pi-users" /> Proveedores</h4>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0">
                        <h4 className="line-height-3 mb-2 text-center"><i className="pi pi-user-plus" />  Clientes</h4>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0">
                        <h4 className="line-height-3 mb-2 text-center"><i className="pi pi-shopping-cart" /> Pedidos</h4>
                    </div>

                    <div className="col-12 md:col-2 mt-2 md:mt-0">
                        <h4 className="line-height-3 mb-2 text-center"><i className="pi pi-chart-bar" /> Reportes</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}


