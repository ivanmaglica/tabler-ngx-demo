import { Component, OnInit } from '@angular/core';
import { FolderApiService } from 'src/app/services/folder.service';
import { IMeta, createEmptyIMetaObject } from '../../../../../shared/meta.interface';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GlobalEventsActions } from 'src/app/services/globals.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  path: string = '';
  public meta: IMeta = createEmptyIMetaObject();

  constructor(
    public globals: GlobalEventsActions,
    public folder: FolderApiService,
  ) {
    console.log("BASIC INIT")
    this.initSubscriptions();
  }


  ngOnInit() {
    console.log("ngOnInit")
  }


  initSubscriptions() {
    this.folder.meta.subscribe(meta => {
      console.log("NEW META", meta);
      this.meta = meta;
    })

    this.globals.events.location.subscribe(url => {
      console.log("URL", url);
      this.path = url;

      this.load();
    })
  }


  load() {
    this.folder.getMeta(this.path);
  }


  public onClick() {
    console.log("click")
  }


  public getRouterLink(path: string) {
    return `/basic/${this.meta.path}/${path}`;
  }


  public getSomething(x: string) {
    const something = "..";
    console.log("something", something, x);

    return something;
  }


  public getRouterParentLink(path: string) {
    const result = `/basic/${this.meta.path.split('/').slice(0,-1).join("/")}`;
    console.log("R", result)

    return result;
  }

}
