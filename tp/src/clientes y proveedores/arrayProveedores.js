 // En este JS se crea el array de objetos en este caso de Proveedores, indicando a cada proveedor su correspondiente id, nombre y cuit.

 export  const ArrayProveedores = {
    getProductsData() {
        return [
            {
                id: "1",
                nombre: "aptecno.ar",
                cuit: 20438766295
            },
            {
                id: "2",
                nombre: "appalex.ar",
                cuit: 25234566543
            },
            {
                id: "3",
                nombre: "apjuan.ar",
                cuit: 21873455746
            },
        ];
    },


    // Función que devuelve una promesa, "getProductsData" proporciona los datos
    getProductsMini() {
        return Promise.resolve(this.getProductsData());
    },
 }; 