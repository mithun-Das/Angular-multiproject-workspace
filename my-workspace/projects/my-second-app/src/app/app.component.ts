import { Component } from '@angular/core';
import { UserService } from "my-first-library";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-second-app";

  constructor(private userService: UserService) {
    this.getInfo();
  }

  getInfo() {
    this.userService.getData().subscribe(response => {
      console.log(response);
    });
  }
}
