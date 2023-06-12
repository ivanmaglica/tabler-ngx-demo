import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './templates/basic/basic.component';
import { Design1Component } from './design/design1/design1.component';
import { Design2Component } from './design/design2/design2.component';
import { VerticalDesignComponent } from './design/shells/vertical-design/vertical-design.component';
import { NavbarOverlapDesignComponent } from './design/shells/navbar-overlap-design/navbar-overlap-design.component';
import { VerticalTransparentDesignComponent } from './design/shells/vertical-transparent-design/vertical-transparent-design.component';

const routes: Routes = [
  { 
    path: 'shells/navbaroverlap',
    children: [
      {
        path: "**",
        component: NavbarOverlapDesignComponent
      }
    ]
  },
  { 
    path: 'shells/vertical',
    children: [
      {
        path: "**",
        component: VerticalDesignComponent
      }
    ]
  },
  { 
    path: 'shells/verticaltransparent',
    children: [
      {
        path: "**",
        component: VerticalTransparentDesignComponent
      }
    ]
  },
  { 
    path: 'design1',
    children: [
      {
        path: "**",
        component: Design1Component
      }
    ]
  },
  { 
    path: 'design2',
    children: [
      {
        path: "**",
        component: Design2Component
      }
    ]
  },
  { 
    path: 'basic',
    children: [
      {
        path: "**",
        component: BasicComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'design1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
