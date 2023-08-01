import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Productos } from './productos';

export default function ListadoDeProductos() {
    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [statuses] = useState(['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK']);
    const [venta] = useState(['Unidad', 'Kilo', 'Kilogramo', 'Gramo']);

    useEffect(() => { /* Llamada a la función para obtener datos */
        Productos.getProductsMini().then((data) => setProducts(data));
    }, []);

    const getSeverity = (value) => { /* switch que cambia el color del estado del inventario en el que se encuentre el producto */
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

    const onRowEditComplete = (e) => { /* esta función se encarga de actualizar el estado del array de productos con los nuevos datos */
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const textEditor = (options) => { /* función que devuelve un Input Text de PrimeReact,  El valor inicial lo toma del objeto options y cualquier cambio en el valor llamará a la función editorCallback */
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusEditor = (options) => { /* función que crea y devuelve un Dropdown de PrimeReact con opciones de estatus */
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

    const UnidadEditor = (options) => { /* función que crea y devuelve un Dropdown de PrimeReact con opciones de unidad de medida */
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



    const priceEditor = (options) => { /* función que devuelve un Input Number de PrimeReact,  El valor inicial lo toma del objeto options y cualquier cambio en el valor llamará a la función editorCallback */
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => { /* función que devuelve un tag de PrimeReact, donde toma el valor del estado de inventario del objeto rowData, y severity, que toma el valor retornado por la función getSeverity al pasarle el estado de inventario */
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    };

    const UnidadDeMedida = (rowData) => { /* función que devuelve un tag de PrimeReact, donde toma el valor de la unidad de medida del objeto rowData */
        return <Tag value={rowData.unidadDeMedida}></Tag>;
    };

    const imageBodyTemplate = (rowData) => { /* función que devuelve una imagen, dentro del src se unen el principio de la url con el valor del objeto rowdata */
        return <img src={`https://i.ibb.co/${rowData.imagen}`} alt={rowData.nombre} className="shadow-2 border-round" style={{ width: '64px' }} />;
    };

    const ratingBodyTemplate = (rowData) => { /* función que devuelve el Rating de PrimeReact, donde  toma el valor del rating del objeto rowdata */
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const priceBodyTemplate = (rowData) => { /* función que toma el toma el valor del precio del objeto rowdata */
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.precio);
    };

    const precioDeCompra = (rowData) => { /* función que toma el toma el valor de compra del objeto rowdata */
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.compra);
    };

    return (
        <div className="p-fluid"> {/* componente de PrimeReact */}
            <DataTable value={products} selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} bodyStyle={{ textAlign: 'center' }}>
                <Column field="id" header="Id" editor={(options) => textEditor(options)}></Column>
                <Column field="nombre" header="Nombre" editor={(options) => textEditor(options)}></Column>
                <Column field="nombreComercial" header="Nombre Comercial" editor={(options) => textEditor(options)} body={(rowData) => <Link to='/input'>{rowData.nombreComercial}</Link>} ></Column>
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
