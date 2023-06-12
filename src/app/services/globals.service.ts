import { Subject } from "rxjs"

export class GlobalEventsActions {
  public events = {
    location: new Subject<string>(),
  }

  public actions = {

  }
}