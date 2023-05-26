import { Component, OnInit } from '@angular/core';
import { ItemsViewer } from '../class/ItemsViewer';
import {dataService} from 'src/Data/dataService';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';


@Component({
  selector: 'app-items-viewer-component',
  templateUrl: './items-viewer-component.html',
  styleUrls: ['./items-viewer-component.css']
})


export class ItemsViewerComponentComponent implements OnInit{
  
  layout: string = 'grid';

  public items!: ItemsViewer[];


  constructor(private dataService: dataService) {}


    ngOnInit() {
    this.items = this.dataService.getDataService();
    console.log('Datos:', this.items); // Imprime los datos en la consola para verificar si se reciben correctamente
  }


}

// export class ItemsViewerComponentComponent {
//   title = 'BejanTest1';
// 	items : any[];
//   layout: string = 'grid';
// 	constructor()
// 	{
	
// 	this.items = [ 
// 		{image : 'bamboo-watch.jpg',text : 'hola1'},
// 		{image : 'bamboo-watch.jpg',text : 'hola2'},
// 		{image : 'bamboo-watch.jpg',text : 'hola3'},
// 		{image : 'bamboo-watch.jpg',text : 'hola4'},
// 		{image : 'bamboo-watch.jpg',text : 'hola5'},
// 		{image : 'bamboo-watch.jpg',text : 'hola6'},
// 		{image : 'bamboo-watch.jpg',text : 'hola7'},
// 		{image : 'bamboo-watch.jpg',text : 'hola8'},
// 		{image : 'bamboo-watch.jpg',text : 'hola9'},
// 		{image : 'bamboo-watch.jpg',text : 'hola10'},
// 		{image : 'bamboo-watch.jpg',text : 'hola11'},
// 		{image : 'bamboo-watch.jpg',text : 'hola12'}
// 	];

	
// 	}