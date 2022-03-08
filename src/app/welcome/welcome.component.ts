import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'

@Component({
  selector: 'studi-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  constructor(private readonly appService:AppService) { }

  sayHelloWorld() {
    this.appService.getHelloWorld().subscribe((data) => alert(data.text))
  }
}
