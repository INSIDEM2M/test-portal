import { Component, OnInit } from "@angular/core";

@Component({
    selector: "im2m-overview",
    templateUrl: "./overview.component.html",
    styleUrls: ["./overview.component.scss"]
})
export class OverviewComponent {
    devices = [];

    constructor() {
        for (let i = 0; i < 10; i++) {
            this.devices.push({
                name: "Modem " + i,
                description: "Some description...."
            });
        }
    }

    delete(index: number) {
      // TODO: Implement
    }
}
