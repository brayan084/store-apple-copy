
import React from 'react';
import { Chip } from 'primereact/chip';

export default function Etiquetas() {
    return (
        <div className="flex flex-wrap gap-2">
            <Chip label="NUEVO" />
            <Chip label="ENVIO GRATIS" />
            <Chip label="QUEDAN 7" />
        </div>
    );
}
        