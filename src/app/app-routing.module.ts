import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'',component:HomeComponent, title:'Home'},
  { path: 'about', component: AboutComponent, title:'About' },
  { path: 'portfolio', component: PortfolioComponent, title:'Portfolio' },
  {path:'contact', component:ContactComponent, title:'Contact'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
