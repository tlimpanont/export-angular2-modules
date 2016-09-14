import {NgModule, ModuleWithProviders}      from '@angular/core';
import {MyCustomInputModule} from './my-custom-intput.component';

const COMPONENTS_MODULES: Array<any> = [
  MyCustomInputModule
];

@NgModule({
  imports: [
    MyCustomInputModule.forRoot()
  ],
  exports: COMPONENTS_MODULES
})
export class ComponentsRootModule {

}


@NgModule({
  imports: COMPONENTS_MODULES,
  exports: COMPONENTS_MODULES
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: ComponentsRootModule};
  }
}
