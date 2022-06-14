import { Component, OnInit, Input, Output } from '@angular/core';
import { Entity } from '../interfaces/entity';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-upd',
  templateUrl: './upd.component.html',
  styleUrls: ['./upd.component.scss']
})
export class UpdComponent implements OnInit {

  entityList:Entity[]=[];

  selectedItem?:Entity;

  constructor(private service:Service1Service) { }

  ngOnInit(): void {
    this.getRest();
  }

  getRest():void{
    this.service.getRest().subscribe(
      (rest1)=>{
        this.entityList=rest1._embedded.entities;
      }
    )
  }
  
  onSelect(entity:Entity){
    this.selectedItem=entity;
  }
  
  updateRest(entity:Entity){
    this.service.putRest(this.selectedItem!._links.self.href, entity).subscribe(
      ()=>{
        this.getRest();
      }
    )
  }

}
