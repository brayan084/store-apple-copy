import React from "react";
import "./pantalla.css";
import Carrusel_Producto from "./fotos_carrusel";
import Descripcion from "./description";
import Dropdownn from "./drop_down_cantidad";
import Dropdown_color from "./drop_down_color";
import Etiquetas from "./etiquetas";
import Botones_compra from "./botones";

export default function Pantalla_producto() {
    return (
        <div className="contenedor">
            <div className="fotos">
                <Carrusel_Producto />
            </div>
            <div className="panel">
                <div>
                    <Etiquetas />
                </div>
                <section className="titulo"> 
                    <h1>Apple iPhone 12 (256 GB) - Negro</h1>
                </section>
                <div className="precio">
                    <h3>$ 431,999.00</h3>
                </div>
                <div className="dropdown_cantidad">
                    <Dropdownn />
                </div>
                <div className="dropdown_color">
                    <Dropdown_color />
                </div>
                <div className="botones">
                    <Botones_compra />
                </div>
            </div>
            <div className="descripcion">
                <Descripcion />
            </div>

        </div>
    )
}