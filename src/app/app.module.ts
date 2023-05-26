import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {dataService} from 'src/Data/dataService';

import { CardModule } from 'primeng/card';
import { AppComponent } from './app.component';
import { ItemsViewerComponentComponent } from './items-viewer/items-viewer-component';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    ItemsViewerComponentComponent
  ],
  imports: [
    BrowserModule,
    DataViewModule,
    CardModule,
    PanelModule
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
