import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TreeEvolutionComponent } from './tree-evolution/tree-evolution.component';
import { NodeComponent } from './tree-evolution/node/node.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TreeEvolutionComponent,
    NodeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
