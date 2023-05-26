import { Injectable } from '@angular/core';

@Injectable()
export class dataService{
    getDataService(){
        return[
        {
            id: 1,
            name: 'Nissan V16',
            price: 50,
            photo: 'nissanv16.jpg'
        },
        {
            id: 2,
            name: 'Ferrari Enzo',
            price: 70,
            photo: 'enzo.jpg'
        },
        {
            id: 3,
            name: 'Toyota Supra',
            price: 150,
            photo: 'toyota-supra.jpg'
        },
        {
            id: 4,
            name: 'Subaru Impreza',
            price: 214,
            photo: 'subaru-wrx.jpg'
        },
        {
            id: 5,
            name: 'Mclaren F1',
            price: 40,
            photo: 'McLaren-F1.jpg'
        },
        {
            id: 6,
            name: 'Porsche Carrera',
            price: 123,
            photo: 'porsche.jpg'
        }

        ];
    }

    getData(){
        return Promise.resolve(this.getDataService());
    }

}