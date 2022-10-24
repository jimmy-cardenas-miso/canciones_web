import { registerLocaleData } from '@angular/common';
import localeEsCO from '@angular/common/locales/es-CO';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponent } from '@testing/component/test.component';

registerLocaleData(localeEsCO);

@NgModule({
  declarations: [TestComponent],
  imports: [RouterTestingModule]
})
export class TestingModule {}
