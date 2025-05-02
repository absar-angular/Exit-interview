import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight';
import { TooltipModule } from './directives/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ElevenLabsConvaiComponent } from './components/elevenlabs-convai/elevenlabs-convai.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HighlightDirective,
    TooltipModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    ElevenLabsConvaiComponent
  ],
  providers: [
    provideStore(),
    provideStoreDevtools({
      maxAge: 25
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
