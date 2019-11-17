import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterPresenterComponent } from './components/counter-presenter/counter-presenter.component';
import { CounterEditorComponent } from './components/counter-editor/counter-editor.component';
import { SearchColorsComponent } from './components/search-colors/search-colors.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterPresenterComponent,
    CounterEditorComponent,
    SearchColorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
