import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import { routes } from './app/app-routing.module';
// import { provideEffects } from '@ngrx/effects';
// import { ProductEffects } from './app/product-list/product-state-management/product.effects';
// import { productFeature } from './app/product-list/product-state-management/product.reducers';
// import { provideState, provideStore } from '@ngrx/store';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';
// import { provideStoreDevtools } from '@ngrx/store-devtools';
// import { userFeature } from './app/users/user-state-management/user.reducers';
// import { UserEffects } from './app/users/user-state-management/user.effects';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // bootstrapApplication(AppComponent,{
  //   providers:[
  //     provideRouter(routes),
  //     provideHttpClient(),
  //     // provideStore(),
  //     provideState(productFeature),
  //     provideState(userFeature),
  //     provideEffects(ProductEffects),
  //     provideEffects(UserEffects),
  //     provideStoreDevtools({ maxAge:25 })
  //   ]
  // })
