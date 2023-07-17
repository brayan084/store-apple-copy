export const Pedidos = {
    getProductsData() {
        return [
            {
                id: '1',
                name: "iMac",
                clientes: "yo brien",
                fechaDeCarga: "05/03/2022",
                fechaDeEntrega: "05/01/2122",
                price: 700.000,
                quantity: 24,
                inventoryStatus: 'ENTREGADO',
            },
            {
                id: '2',
                name: "iPhone",
                clientes: "yo brien",
                fechaDeCarga: "01/12/2222",
                fechaDeEntrega: "04/01/2024",
                price: 200.000,
                quantity: 3,
                inventoryStatus: 'EN CAMINO',
            },
            {
                id: '3',
                name: "IPad",
                clientes: "yo brien",
                fechaDeCarga: "05/02/2024",
                fechaDeEntrega: "09/07/2072",
                price: 7100.000,
                quantity: 2,
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
