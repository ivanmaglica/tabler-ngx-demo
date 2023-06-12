import { Injectable } from "@angular/core";
import { GlobalEventsActions } from "./globals.service";
import { NavigationEnd, Router } from "@angular/router";

@Injectable()
export class AppService {
  constructor(
    private router: Router,
    private globals: GlobalEventsActions,
  ) {
    this.init();
  }


  init() {
    console.log("APP INIT");
  }


  initSubscriptions() {
  }
}