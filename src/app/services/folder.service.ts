import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from "rxjs";

import { IMeta, createEmptyIMetaObject } from '../../../../shared/meta.interface';

@Injectable()
export class FolderApiService {
  public meta: BehaviorSubject<IMeta> = new BehaviorSubject(createEmptyIMetaObject());

  constructor(
    private http: HttpClient
  ) {
  }


  public init() {
    console.log("FOLDER API INIT");
  }
  

  public getMeta(path: string) {
    this.http.get(`http://d:3000/folder/${path}`).subscribe(data => {
      console.log("META:", data);
      this.meta.next(data as IMeta);
    });
  }


}