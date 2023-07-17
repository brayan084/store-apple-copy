import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Productos } from './productos';

export default function Lproductos() {
    const [products, setProducts] = useState(null);
    const [statuses] = useState(['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK']);
    const [venta] = useState(['Unidad', 'Kilo', 'Kilogramo', 'Gramo']);

    useEffect(() => {
        Productos.getProductsMini().then((data) => setProducts(data));
    }, []); 

    const getSeverity = (value) => {
        switch (value) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Seleccionar Estatus"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        );
    };

    const UnidadEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={venta}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Seleccionar Unidad de M"
                itemTemplate={(unidad) => {
                    return <Tag value={unidad}></Tag>;
                }}
            />
        );
    };
    

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    };

    const UnidadDeMedida = (rowData) => {
        return <Tag value={rowData.unidadDeMedida}></Tag>;
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={`https://i.ibb.co/${rowData.imagen}`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;
    };

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.precio);
    };

    const precioDeCompra = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.compra);
    };

    return (
        <div className="card p-fluid">
            <DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} bodyStyle={{ textAlign: 'center' }}>
                <Column field="id" header="Id" editor={(options) => textEditor(options)}></Column>
                <Column field="nombre" header="Nombre" editor={(options) => textEditor(options)}></Column>
                <Column field="nombreComercial" header="Nombre Comercial" editor={(options) => textEditor(options)} ></Column>
                <Column field="imagen" header="Imagen" body={imageBodyTemplate}></Column>
                <Column field="precio" header="Precio" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ minWidth: '12rem' }}></Column>
                <Column field="categoria" header="Categoría" editor={(options) => textEditor(options)}></Column>
                <Column field="reseñas" header="Reseñas" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="unidadDeMedida" header="Unidad de Medida" body={UnidadDeMedida} editor={(unidad) => UnidadEditor(unidad)}></Column>
                <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)}></Column>
                <Column field="proveedor" header="Proveedor" editor={(options) => textEditor(options)}></Column>
                <Column field="compra" header="Compra" body={precioDeCompra} editor={(options) => priceEditor(options)} style={{ minWidth: '12rem' }}></Column>
                <Column rowEditor headerStyle={{ minWidth: '8rem' }}></Column>
            </DataTable>
        </div>
    );
}
        



/* import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Rating } from 'primereact/rating';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { Productos } from './productos';

export default function Lproductos() {
    const [products, setProducts] = useState(null);
    const [venta] = ['Unidad', 'Kilo', 'Kilogramo', 'Gramo'];

    useEffect(() => {
        Productos.getProductsMini().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        if (value !== undefined && value !== null) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        } else {
            return '';
        }
    };

    const getSeverity = (value) => {
        switch (value) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={venta}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select"
                itemTemplate={(option) => {
                    return <Tag value={option}></Tag>;
                }}
            />
        );
    };

    const iD = (options) => {
        return formatCurrency(options.id);
    };

    const nombreComercial = (options) => {
        return formatCurrency(options.nombreComercial);
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={`https://i.ibb.co/${rowData.imagen}`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.precio);
    };

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    };

    const UnidadDeMedida = (rowData) => {
        return <Tag value={rowData.unidadDeMedida}></Tag>;
    };

    const proveedor = (options) => {
        return formatCurrency(options.proveedor);
    };

    const precioDeCompra = (options) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(options.compra);
    };




    return (
        <div className="card p-fluid">
            <DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="Id" body={iD}></Column>
                <Column field="nombre" header="Nombre" editor={(options) => textEditor(options)} sortable style={{ minWidth: '16rem' }}></Column>
                <Column field="nombreComercial" header="Nombre Comercial" editor={(options) => textEditor(options)} body={nombreComercial}></Column>
                <Column field="imagen" header="Imagen" body={imageBodyTemplate}></Column>
                <Column field="precio" header="Precio" editor={(options) => priceEditor(options)} body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                <Column field="categoria" header="Categoría" editor={(options) => textEditor(options)} sortable style={{ minWidth: '10rem' }}></Column>
                <Column field="reseñas" header="Reseñas" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="unidadDeMedida" header="Unidad de Medida" body={UnidadDeMedida} editor={(options) => statusEditor(options)} style={{ minWidth: '12rem' }}></Column>
                <Column field="proveedor" header="Proveedor" editor={(options) => textEditor(options)} body={proveedor}></Column>
                <Column field="compra" header="Compra" editor={(options) => priceEditor(options)} body={precioDeCompra}></Column>
                <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
        </div>
    );
}
 */