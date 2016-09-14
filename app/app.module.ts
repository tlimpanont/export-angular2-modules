import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {FormsModule} from '@angular/forms';
import {MyCustomInputModule} from "./my-custom-intput.component";
import {ComponentsRootModule, ComponentsModule} from "./components.module";

@NgModule({
  imports: [BrowserModule, FormsModule, ComponentsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
