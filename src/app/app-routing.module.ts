import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DirectorProfileComponent } from './director-profile/director-profile.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:"Home", component:HomeComponent},
  {path:"ContactUs", component:ContactUsComponent},
  {path:"AboutUs",  component:AboutUsComponent},
  {path:"DirectorProfile",  component:DirectorProfileComponent},
  {path:"Services",  component:ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }