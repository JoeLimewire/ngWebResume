import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UnknownComponent } from './pages/unknown/unknown.component';

const routes: Routes = [
  {path: 'homeLink', component: HomeComponent},
  {path: 'aboutLink', component: AboutComponent},
  {path: 'projectsLink', component: ProjectsComponent},
  {path: 'contactLink', component: ContactComponent},
  {path: '**', component: UnknownComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
