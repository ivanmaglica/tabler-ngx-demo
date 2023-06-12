import { Component } from '@angular/core';
import { ExeutorService } from 'external/executor-ng/src/public-api';

@Component({
  selector: 'app-vertical-design',
  templateUrl: './vertical-design.component.html',
  styleUrls: ['./vertical-design.component.css']
})
export class VerticalDesignComponent {
  constructor(
    private executor: ExeutorService
  ) {}

  public async onNewViewClick() {
    console.log("ONV CLICK")
    const result = await this.executor.run("test");
    console.log("RUN RESULT", result);
  }
}
