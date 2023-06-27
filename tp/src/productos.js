export const Productos = {
    /* Array de objeto */
    getProductsData() {
        return [
            {
                id: '1',
                name: 'iMac',
                nombreComercial: 'Apple iMac 27-Inch Desktop 3.4 Ghz Intel Core I7',
                image: 'prime/src/imagenesTP/imac.jpg',              
                price: 700999,
                category: 'Electronics',
                quantity: 24,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 5,
                provider: 'aptecno.ar',
                compra: 1000.00,
            },
            {
                id: '2',
                name: 'MacBook Air',
                nombreComercial: 'MacBook Air M1 gris espacial 13.3 macOS',
                image: 'prime/src/imagenesTP/macbook.jpg',
                price: 499999,
                category: 'Electronics',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                provider: 'aptecno.ar',
                compra: 900.00,
            },
            {
                id: '3',
                name: 'iPhone',
                nombreComercial: 'Apple iPhone 12 (256 GB) - Negro',
                image: 'prime/src/imagenesTP/iphone1.jpg',
                price: 431999,
                category: 'Electronics',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                provider: 'aptecno.ar',
                compra: 850.00,
            },
            {
                id: '4',
                name: 'Ipad Pro',
                nombreComercial: 'Apple iPad Pro (128GB) Gris espacial (5ª generación)',
                image: 'prime/src/imagenesTP/ipad.jpg',
                price: 326999,
                category: 'Electronics',
                quantity: 24,
                inventoryStatus: 'LOWSTOCK',
                rating: 5,
                provider: 'aptecno.ar',
                compra: 733.00,
            },
            {
                id: '5',
                name: 'AirPods Max',
                nombreComercial: 'Apple AirPods Max - Gris espacial',
                image: 'prime/src/imagenesTP/auriculares.jpg',
                price: 288999,
                category: 'Electronics',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                provider: 'aptecno.ar',
                compra: 384.63,
            },
            {
                id: '6',
                name: 'Apple Watch',
                nombreComercial: 'Apple Watch Series 5 40mm Gps 32gb',
                image: 'prime/src/imagenesTP/apple watch.jpg',
                price: 86504,
                category: 'Electronics',
                quantity: 24,
                inventoryStatus: 'LOWSTOCK',
                rating: 5,
                provider: 'aptecno.ar',
                compra: 350.00,
            },

        ];
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

};

