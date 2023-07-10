import React from 'react'; 
import { Menubar } from 'primereact/menubar';

export default function Navbar() {
    const items =[
        {
            label: 'Inicio',
            icon: 'pi pi-fw pi-home',
            href:'/'
        },
        {
            label: 'Productos',
            icon: 'pi pi-fw pi-apple',
            href:'/listadoDeProductos'
        },
        {
            label: 'Proveedores',
            icon: 'pi pi-fw pi-users',
            href:'/'
        },
        {
            label: 'Clientes',
            icon: 'pi pi-fw pi-user-plus',
            href:'/'
        },
        {
            label: 'Pedidos',
            icon: 'pi pi-fw pi-shopping-cart',
            items: [
                {
                    label: 'Reportes',
                    icon: 'pi pi-fw pi-chart-bar',
                    href:'/'
                },

            ]
        }
    ];

    return (
        <div className='shadow-2'>
            <Menubar model={items} className='bg-gray-900' />
        </div>
    )
}

