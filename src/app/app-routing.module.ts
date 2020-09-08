import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Dit is de routing. Als je uiteindelijk meer componenten gaat toevoegen, dan zul je dit nodig hebben.
 * Dit is gelukkig allemaal goed gedocumenteerd in de Angular-documentatie.
 */
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
