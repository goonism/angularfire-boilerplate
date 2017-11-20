import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
export const firebaseConfig = environment.firebaseConfig;

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'signup', component: Signup },
  // { path: 'settings', component: Settings },
  // { path: 'profile', component: HeroDetailComponent },
  // { path: 'search', component: Search },
  // { path: '**', component: PageNotFoundComponent }
];
//, { enableTracing: true 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  	AngularFireModule.initializeApp(environment.firebaseConfig),
  	AngularFireDatabaseModule,
  	AngularFireAuthModule,
  	AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
