import { Injectable } from "@angular/core";
import { FolderApiService } from "./folder.service";
import { GlobalEventsActions } from "./globals.service";
import { NavigationEnd, Router } from "@angular/router";

@Injectable()
export class AppService {
  constructor(
    private router: Router,
    private globals: GlobalEventsActions,
    private folder: FolderApiService,
  ) {
    this.init();
  }


  init() {
    console.log("APP INIT");
    this.folder.init();
  }


  initSubscriptions() {
    this.router.events.subscribe(ev => {
      console.log("EV", ev)
      if (!(ev instanceof NavigationEnd)) {
        return;
      }      

      const url = window.location.pathname.replace("/basic/", "").replace("/basic", "");
      console.log("URL", url);

      this.globals.events.location.next(url);
    });
  }
}