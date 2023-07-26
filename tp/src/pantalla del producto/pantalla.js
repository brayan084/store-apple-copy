import React from "react";
import Carrusel_Producto from "./fotos_carrusel";
import "./pantalla.css";
import Descripcion from "./description";

export default function Pantalla_producto() {
    return (
        <div>
            <div className="carrusel col-6">
                <Carrusel_Producto />
                <Descripcion />
            </div>
            <div className="descripcion col-6">
            </div>

        </div>
    )
}