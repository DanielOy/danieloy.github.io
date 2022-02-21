import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'education', loadChildren: () => import('./education/education.module').then(mod => mod.EducationModule) },
  { path: 'experience', loadChildren: () => import('./experience/experience.module').then(mod => mod.ExperienceModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(mod => mod.ProjectsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
