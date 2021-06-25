import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { DragAndDropManagerDirective, DragAndDropManagerRootDirective } from 'src/_directives/drag-and-drop-manager.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    DragAndDropManagerDirective,
    DragAndDropManagerRootDirective
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
