import { CLIENTS } from './../fake-clients';

import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { DataService } from './../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {

  

  client ? : Client  ;
  clientTypes:string[];


  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.clientTypes = this.dataService.getclienttypes()
    this.dataService.getClients().subscribe(clients=> this.client=clients[0]);
  }
    
  


  displayClient():void{
    console.log(this.client)
  }

}
