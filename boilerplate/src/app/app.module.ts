import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { HomeComponent } from './pages/home/home.component';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
export const firebaseConfig = environment.firebaseConfig;

// const appRoutes: Routes = [
//   { path: 'login', component: Login },
//   { path: 'signup', component: Signup },
//   { path: 'settings', component: Settings },
//   { path: 'profile', component: HeroDetailComponent },
//   { path: 'search', component: Search },
//   { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes, { enableTracing: true }),
	AngularFireModule.initializeApp(environment.firebaseConfig),
	AngularFireDatabaseModule,
	AngularFireAuthModule,
	AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
