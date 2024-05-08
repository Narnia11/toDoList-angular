import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonComponent } from './component/button/button.component';
import {HttpClientModule} from '@angular/common/http';


import { TaskItemComponent } from './component/task-item/task-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
  
    TaskItemComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
