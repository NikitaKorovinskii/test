import { NgModule } from '@angular/core';;
import {RouterModule, Routes} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { TableCrudComponent } from './table-crud/table-crud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";


const appRoutes: Routes = [
  {path: '', component: TableCrudComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    TableCrudComponent,
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
