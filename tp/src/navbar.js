import React from 'react'; 
import { Menubar } from 'primereact/menubar';

export default function Navbar() {
    /* array de objetos con las entradas e iconos que se veran en el nav */
    const items =[
        {
            label: 'Inicio',
            icon: 'pi pi-fw pi-home',
            url:'/'
        },
        {
            label: 'Productos',
            icon: 'pi pi-fw pi-apple',
            url:'/listadoDeProductos'
        },
        {
            label: 'Proveedores',
            icon: 'pi pi-fw pi-users',
            url:'/'
        },
        {
            label: 'Clientes',
            icon: 'pi pi-fw pi-user-plus',
            url:'/'
        },
        {
            label: 'Pedidos',
            icon: 'pi pi-fw pi-shopping-cart',
            items: [ /* array de objetos para un dropdown */
                {
                    label: 'Reportes',
                    icon: 'pi pi-fw pi-chart-bar',
                    url:'/'
                },

            ]
        }
    ];

    return (
        <div> {/* Menu de PrimeReact con modificación de fondo */}
            <Menubar model={items} className='bg-gray-900' />
        </div>
    )
}

