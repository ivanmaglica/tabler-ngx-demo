import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { GlobalEventsActions } from './services/globals.service';
import { Design1Component } from './design/design1/design1.component';

import { Design2Component } from './design/design2/design2.component';
import { NavbarOverlapDesignComponent } from './design/shells/navbar-overlap-design/navbar-overlap-design.component';
import { VerticalDesignComponent } from './design/shells/vertical-design/vertical-design.component';
import { VerticalTransparentDesignComponent } from './design/shells/vertical-transparent-design/vertical-transparent-design.component';
import { TablerNgxModule } from 'external/tabler-ngx/projects/tabler-ngx/src/lib/tabler-ngx.module';
import { CommonComponentsModule } from 'external/tabler-ngx/projects/tabler-ngx/src/lib/components/common-components.module';
import { NavbarOverlapModule } from 'external/tabler-ngx/projects/tabler-ngx/src/lib/shells/navbar-overlap/navbar-overlap.module';
import { VerticalShellModule } from 'external/tabler-ngx/projects/tabler-ngx/src/lib/shells/vertical-shell/vertical-shell.module';
// import { NavbarOverlapComponent } from './shells/navbar-overlap/navbar-overlap.component';


@NgModule({
  declarations: [
    AppComponent,
    Design1Component,
    Design2Component,
    NavbarOverlapDesignComponent,
    VerticalDesignComponent,
    VerticalTransparentDesignComponent,
    // NavbarOverlapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    TablerNgxModule,
    CommonComponentsModule,
    NavbarOverlapModule,
    VerticalShellModule,
    
  ],
  providers: [
    AppService,
    GlobalEventsActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
