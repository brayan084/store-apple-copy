import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

export default function InputDemo() {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [seleccionarCategoria, setCategoria] = useState(null);
    const categoria = [
        { name: 'Tecnología', code: 'T' },
        { name: 'Ropa', code: 'R' },
        { name: 'Accesorios', code: 'A' },
        { name: 'Electrodomesticos', code: 'E' },
    ];

    const [seleccionarStatus, setStatus] = useState(null);
    const status = [
        { name: 'INSTOCK', code: 'I' },
        { name: 'LOWSTOCK', code: 'L' },
        { name: 'OUTOFSTOCK', code: 'O' },
    ];
    
    const [seleccionarUnidad, setUnidad] = useState(null);
    const unidadDeMedida = [
        { name: 'Unidades', code: 'I' },
        { name: 'Kilo', code: 'k' },
        { name: 'Kilogramo', code: 'kg' },
        { name: 'Gramo', code: 'g' },
    ];

    const [seleccionarProveedor, setProveedor] = useState(null);
    const proveedor = [
        { name: 'aptecno.ar', code: 'A' },
        { name: 'apjuan.ar', code: 'AJ' },
        { name: 'app', code: 'kg' },
    ];


    return (
        <div className="card">
            <div className="justify-content-center flex flex-column md:flex-row gap-3">
                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-hashtag"></i>
                    </span>
                    <InputNumber inputId="minmax-buttons" value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" showButtons min={0} max={100} />
                </div>

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-cart-plus"></i>
                    </span>
                    <InputText placeholder="Nombre" />
                </div>

            </div>

            <div className="justify-content-center flex flex-column md:flex-row gap-3 mt-3">

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-apple"></i>
                    </span>
                    <InputText placeholder="Nombre Comercial" />
                </div>

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">$</span>
                    <InputNumber placeholder="Precio" />
                    <span className="p-inputgroup-addon">.00</span>
                </div>

            </div>

            <div className="justify-content-center flex flex-column md:flex-row gap-3 mt-3">

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-tags"></i>
                    </span>
                    <Dropdown value={seleccionarCategoria} onChange={(e) => setCategoria(e.value)} options={categoria} optionLabel="name"
                        placeholder="Categoría" className="w-full md:w-14rem" />
                </div>

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">$</span>
                    <InputNumber placeholder="Precio de Compra" />
                    <span className="p-inputgroup-addon">.00</span>
                </div>

            </div>

            <div className="justify-content-center flex flex-column md:flex-row gap-3 mt-3">

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-hashtag"></i>
                    </span>
                    <InputNumber inputId="minmax-buttons" value={value2} onValueChange={(e) => setValue2(e.value)} mode="decimal" showButtons min={0} max={100} />
                </div>

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-tags"></i>
                    </span>
                    <Dropdown value={seleccionarStatus} onChange={(e) => setStatus(e.value)} options={status} optionLabel="name"
                        placeholder="Status" className="w-full md:w-14rem" />
                </div>

            </div>

            <div className="justify-content-center flex flex-column md:flex-row gap-3 mt-3">

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-tags"></i>
                    </span>
                    <Dropdown value={seleccionarUnidad} onChange={(e) => setUnidad(e.value)} options={unidadDeMedida} optionLabel="name"
                        placeholder="Unidad de Medida" className="w-full md:w-14rem" />
                </div>

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-tags"></i>
                    </span>
                    <Dropdown value={seleccionarProveedor} onChange={(e) => setProveedor(e.value)} options={proveedor} optionLabel="name"
                        placeholder="Proveedor" className="w-full md:w-14rem" />
                </div>

            </div>
        </div>
    )
}
