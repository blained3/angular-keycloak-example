import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { KeycloakService } from './keycloak.service';

export function kcFactory(keycloakService: KeycloakService): () => void {
  return () => keycloakService.init();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: kcFactory,
      deps: [KeycloakService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
