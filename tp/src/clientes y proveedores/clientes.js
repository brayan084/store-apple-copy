import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { ArrayClientes } from './arrayClientes';
 
export default function Clientes() {
    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        ArrayClientes.getProductsMini().then((data) => setProducts(data));
    }, []); 

    
    //Funcion que guarda los datos cuando esta es modficada
    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };
    //Funcion que sirve para mostrar el input de texto
    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

   

    return (
        <div className="clientes-container">
            <div className="card p-fluid">
                <DataTable value={products} selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="id" header="ID" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="nombre" header="Nombre" editor={(options) => textEditor(options)} body={(rowData) => <Link to='/formularioPro'>{rowData.nombre}</Link>} style={{ width: '20%' }}></Column>
                    <Column field="cuit" header="Cuit" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodystyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div>
        </div>    
    );
}