import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function Dropdown_color() {
    let color = ["rojo", "azul", "amarillo", "verde"];
    const [selectedItem, setSelectedItem] = useState(null);
    const items = Array.from({ length: 5 }).map((_, i) => ({ label: color.map((c) => c), value: i }));

    return (
        <div className="card flex justify-content-left mt-3 mb-3">
            <Dropdown value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} virtualScrollerOptions={{ itemSize: 38 }} 
                placeholder="Seleccione un color" className="w-full md:w-14rem" />
        </div>
    )
}
        