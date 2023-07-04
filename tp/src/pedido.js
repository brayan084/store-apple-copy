import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { Pedidos } from './service/ProductService';
// import { InputMask } from "primereact/inputmask";
export default function RowEditingDemo() {
    const [products, setProducts] = useState(null);
    const [statuses] = useState(['ENTREGADO', 'EN CAMINO', 'PREPARANDO ENTREGA']);

    useEffect(() => {
        Pedidos.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps



    // esta funcion hace que se cambie el color de las etiquetas del estado
    const getSeverity = (value) => {
        switch (value) {
            case 'ENTREGADO':
                return 'success';

            case 'EN CAMINO':
                return 'warning';

            case 'PREPARANDO ENTREGA':
                return 'danger';

            default:
                return null;
        }
    };


    // esta funcion guarda los datos cuando se edita cualquier dato
    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    // esto es el Dropdown que se utiliza para editar los estados
    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        );
    };

    // estas funciones son para mostrar los input de texto

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };
    const numberEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} />;
    };

    // const calendarEditor = (options) => {
    //     return <InputMask type='text' value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    // }
    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    return (
        <div className="card p-fluid">
            <DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="Id"  style={{ width: '10%' }}></Column>
                <Column field="name" header="Producto" editor={(options) => textEditor(options)} style={{ width: '17%' }}></Column>
                <Column field="quantity" header="Cantidad" editor={(options) => numberEditor(options)} style={{ width: '10%' }}></Column>
                <Column field="fechaDeEntrega" header="Fecha de Entrega" editor={(options) => textEditor(options)} style={{ width: '17%' }}></Column>
                <Column field="fechaDeCarga" header="Fecha de Carga" editor={(options) => textEditor(options)} style={{ width: '17%' }}></Column>
                <Column field="inventoryStatus" header="Estado" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '13%' }}></Column>
                <Column field="price" header="Precio" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '17%' }}></Column>
                <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
        </div>
    );
}