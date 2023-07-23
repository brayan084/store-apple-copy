export  const ArrayClientes = {
    getProductsData() {
        return [
            {
                id: "1",
                nombre: "Leandro ",
                cuit: 27893459081
            },
            {
                id: "2",
                nombre: "Maria",
                cuit: 27223450981
            },
            {
                id: "3",
                nombre: "Alejandro",
                cuit: 20129876395
            },
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData());
    },
 };