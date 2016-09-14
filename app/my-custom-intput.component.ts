import {Component, forwardRef, NgModule, ModuleWithProviders, ViewChild, ElementRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule} from '@angular/forms';

@Component({
  selector: 'my-custom-input',
  template: `
    <input type="text" placeholder="some text please" #input [(ngModel)]="model" />
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyCustomInputComponent),
      multi: true
    }
  ]
})
export class MyCustomInputComponent implements ControlValueAccessor {

  private _model: any = '';
  @ViewChild('input') input: ElementRef;

  private onTouchedCallback: (value: any) => {
    // noop
  };
  private onChangeCallback: (value: any) => {
    // noop
  };

  get model(): any {
    return this._model;
  };

  set model(value: any) {
    if (value !== this._model) {
      this._model = value;
      this.onChangeCallback(value);
    }
  }

  onBlur() {
    this.onTouchedCallback(null);
  }

  writeValue(value: any) {
    if (value !== this._model) {
      this._model = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}

@NgModule({
  imports: [FormsModule],
  exports: [MyCustomInputComponent],
  declarations: [MyCustomInputComponent],
})
export class MyCustomInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyCustomInputModule,
      providers: []
    };
  }
}
