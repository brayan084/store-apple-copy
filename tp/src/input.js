import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

export default function InputDemo() {
    const [value, setValue] = useState(0);
    const [seleccionarCategoria, setCategoria] = useState(null);
    const categoria = [
        { name: 'Tecnología', code: 'T' },
        { name: 'Ropa', code: 'R' },
        { name: 'Accesorios', code: 'A' },
        { name: 'Electrodomesticos', code: 'E' },
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
                    <InputNumber placeholder="Price" />
                    <span className="p-inputgroup-addon">.00</span>
                </div>

            </div>
        </div>
    )
}
