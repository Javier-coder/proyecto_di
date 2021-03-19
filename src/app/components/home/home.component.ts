import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  navegarUno(input1: string){
    this.ruta.navigate(["uno", input1]);
  }

  navegarDos(input2: string){
    this.ruta.navigate(["dos", input2]);
  }
}
