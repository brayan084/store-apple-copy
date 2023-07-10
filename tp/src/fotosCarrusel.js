export const FotosCarrusel = {
    /* Array de objeto */
    getProductsData() {
        return [
            {
                id: '1',
                nombre: 'foto de producto',
                imagen: 'Wkp8Hp6/pexels-fauxels-3184451.jpg',              
            },
            {
                id: '2',
                nombre: 'foto de producto',
                imagen: 'QQvjjRb/1.png',              
            },
            {
                id: '3',
                nombre: 'foto de producto',
                imagen: 'VNynpYr/2.png',              
            },
            {
                id: '4',
                nombre: 'foto de producto',
                imagen: 'jH1d3dh/6.png',              
            },
            {
                id: '5',
                nombre: 'foto de producto',
                imagen: 'wRyzLxP/5.png',              
            },
            {
                id: '6',
                nombre: 'foto de producto',
                imagen: 'pXvKfmT/3.png',              
            },
            

        ];
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

};

