import React from 'react'; 
import { Menubar } from 'primereact/menubar';

export default function Navbar() {
    const items =[
        {
            label: 'Inicio',
            icon: 'pi pi-fw pi-home',
            url:'/'
        },
        {
            label: 'Productos',
            icon: 'pi pi-fw pi-apple',
            url:'/pedidos'
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
                    label: 'Reportes de ventas',
                    icon: 'pi pi-fw pi-chart-bar',
                    url:'/reportesVentas'
                },
                {
                    label: 'Reportes de compras',
                    icon: 'pi pi-fw pi-chart-bar',
                    url:'/reportesCompras'
                }

            ]
        }
    ];

    return (
        <div className='shadow-2'>
            <Menubar model={items} className='bg-gray-900' />
        </div>
    )
}

