import { NgModule } from '@angular/core';;
import {RouterModule, Routes} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { TableCrudComponent } from './table-crud/table-crud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';


const appRoutes: Routes = [
  {path: '', component: TableCrudComponent},
  {path: 'page2', component: Page2Component},
  {path: 'page1', component: Page1Component},
]
@NgModule({
  declarations: [
    AppComponent,
    TableCrudComponent,
    Page2Component,
    Page1Component,
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        FormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
