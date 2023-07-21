export const Pedidos = {
    getProductsData() {
        return [
            {
                id: '1',
                name: "iMac",
                clientes: "brayan",
                fechaDeCarga: "05/03/2022",
                fechaDeEntrega: "05/01/2023",
                price: 10000.000,
                quantity: 24,
                inventoryStatus: 'ENTREGADO',
            },
            {
                id: '2',
                name: "iPhone",
                clientes: "josefina",
                fechaDeCarga: "01/12/2022",
                fechaDeEntrega: "04/01/2024",
                price: 1000.000,
                quantity: 3,
                inventoryStatus: 'EN CAMINO',
            },
            {
                id: '3',
                name: "MacBook Air",
                clientes: "matias",
                fechaDeCarga: "05/06/2022",
                fechaDeEntrega: "09/12/2072",
                price: 7100.000,
                quantity: 2,
                inventoryStatus: 'PREPARANDO ENTREGA',
            },
            {
                id: '4',
                name: "MacBook Air",
                clientes: "carlos",
                fechaDeCarga: "12/07/2022",
                fechaDeEntrega: "12/09/2026",
                price: 22100.000,
                quantity: 2,
                inventoryStatus: 'ENTREGADO',
            },
            {
                id: '5',
                name: "AirPods Max",
                clientes: "carlos",
                fechaDeCarga: "30/04/2022",
                fechaDeEntrega: "03/04/2030",
                price: 71200.000,
                quantity: 1,
                inventoryStatus: 'PREPARANDO ENTREGA',
            },
            {
                id: '6',
                name: "Apple Watch",
                clientes: "esteban",
                fechaDeCarga: "15/08/2022",
                fechaDeEntrega: "07/01/2024",
                price: 100.000,
                quantity: 5,
                inventoryStatus: 'EN CAMINO',
            },
            {
                id: '7',
                name: "AirPods Max",
                clientes: "juan",
                fechaDeCarga: "24/01/2022",
                fechaDeEntrega: "25/02/2025",
                price: 45500.000,
                quantity: 1,
                inventoryStatus: 'PREPARANDO ENTREGA',
            },
            {
                id: '8',
                name: "Ipad Pro",
                clientes: "emilia",
                fechaDeCarga: "31/04/2022",
                fechaDeEntrega: "10/08/2023",
                price: 8200.000,
                quantity: 10,
                inventoryStatus: 'EN CAMINO',
            },
            {
                id: '9',
                name: "MacBook Air",
                clientes: "stella",
                fechaDeCarga: "18/02/2022",
                fechaDeEntrega: "23/07/2022",
                price: 96700.000,
                quantity: 3,
                inventoryStatus: 'ENTREGADO',
            },
            {
                id: '10',
                name: "Apple Watch",
                clientes: "pablo",
                fechaDeCarga: "20/03/2022",
                fechaDeEntrega: "04/07/2032",
                price: 700.000,
                quantity: 1,
                inventoryStatus: 'PREPARANDO ENTREGA',
            },
            {
                id: '11',
                name: "MacBook Air",
                clientes: "dylan",
                fechaDeCarga: "05/12/2024",
                fechaDeEntrega: "09/07/2072",
                price: 7100.000,
                quantity: 10,
                inventoryStatus: 'PREPARANDO ENTREGA',
            },
            {
                id: '12',
                name: "IPad",
                clientes: "ian",
                fechaDeCarga: "05/23/2024",
                fechaDeEntrega: "09/07/2072",
                price: 7100.000,
                quantity: 2,
                inventoryStatus: 'PREPARANDO ENTREGA',
            },
            {
                id: '13',
                name: "IPad",
                clientes: "yo brien",
                fechaDeCarga: "05/30/2024",
                fechaDeEntrega: "09/07/2072",
                price: 7100.000,
                quantity: 1,
                inventoryStatus: 'PREPARANDO ENTREGA',
            },
        ];
    },

    // getProductsWithOrdersData() {
    //     return [
    //         {
    //             id: '1000',
    //             code: 'f230fh0g3',
    //             name: 'Bamboo Watch',
    //             description: 'Product Description',
    //             image: 'bamboo-watch.jpg',
    //             price: 65,
    //             category: 'Accessories',
    //             quantity: 24,
    //             inventoryStatus: 'INSTOCK',
    //             rating: 5,
    //             orders: [
    //                 {
    //                     id: '1000-0',
    //                     productCode: 'f230fh0g3',
    //                     date: '2020-09-13',
    //                     amount: 65,
    //                     quantity: 1,
    //                     customer: 'David James',
    //                     status: 'PENDING'
    //                 },
    //                 {
    //                     id: '1000-1',
    //                     productCode: 'f230fh0g3',
    //                     date: '2020-05-14',
    //                     amount: 130,
    //                     quantity: 2,
    //                     customer: 'Leon Rodrigues',
    //                     status: 'DELIVERED'
    //                 },
    //                 {
    //                     id: '1000-2',
    //                     productCode: 'f230fh0g3',
    //                     date: '2019-01-04',
    //                     amount: 65,
    //                     quantity: 1,
    //                     customer: 'Juan Alejandro',
    //                     status: 'RETURNED'
    //                 },
    //                 {
    //                     id: '1000-3',
    //                     productCode: 'f230fh0g3',
    //                     date: '2020-09-13',
    //                     amount: 195,
    //                     quantity: 3,
    //                     customer: 'Claire Morrow',
    //                     status: 'CANCELLED'
    //                 }
    //             ]
    //         },
    //     ];
    // },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    // getProductsWithOrdersSmall() {
    //     return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    // },

    // getProductsWithOrders() {
    //     return Promise.resolve(this.getProductsWithOrdersData());
    // }
};
