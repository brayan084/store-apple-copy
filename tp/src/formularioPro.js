import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

export default function InputDemo2() {
    const [value, setValue] = useState(0);


    return (
        <div className="justify-content-center p-fluid container">
            <div className="col-12 md:col-6">
                <div className="card">
                    <div className="justify-content-center flex flex-column md:flex-row gap-3">
                        <div className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-hashtag"></i>
                            </span>
                            <InputNumber className="p-inputtext-addon" inputId="minmax-buttons" value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" showButtons min={0} max={100} />
                        </div>

                        <div className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-cart-plus"></i>
                            </span>
                            <InputText className="p-inputtext-addon" placeholder="Nombre" />
                        </div>

                        <div className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-briefcase"></i>
                            </span>
                            <InputText className="p-inputtext-addon" placeholder="Cuit" />
                        </div>

                    </div>

                    <div className="card flex justify-content-center">
                        <Button label="Enviar" />
                    </div>
                </div>

            </div>

        </div>
    )
}