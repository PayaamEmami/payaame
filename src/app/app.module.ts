import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';
import { HomePromoComponent } from './components/home/home-promo/home-promo.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomePromoComponent,
    ResumeComponent,
    PageHeaderComponent,
    PageNotFoundComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
