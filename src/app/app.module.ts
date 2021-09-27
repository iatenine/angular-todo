import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { VisibilityComponent } from './components/visibility/visibility.component';
import { EmitterComponent } from './components/emitter/emitter.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, VisibilityComponent, EmitterComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
