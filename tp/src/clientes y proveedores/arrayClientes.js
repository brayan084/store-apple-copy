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
            {
                id: "4",
                nombre: "Brayan",
                cuit: 22445566667
            },
            {
                id: "5",
                nombre: "Matias",
                cuit: 20438766295
            },
            {
                id: "6",
                nombre: "Josefina",
                cuit: 20234566543
            },
            {
                id: "7",
                nombre: "juan",
                cuit: 23456090878
            },
            {
                id: "8",
                nombre: "Jose",
                cuit: 27561123432
            },
            {
                id: "9",
                nombre: "Martin",
                cuit: 20094921084
            },
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData());
    },
 }; 