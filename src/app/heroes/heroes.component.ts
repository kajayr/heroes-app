import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import {MessageService} from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
hero:Hero = {
id: 1,
name: "Windstorm"
}
heroes:Hero[] = [];
selectedHero?:Hero;
  constructor(private heroService:HeroService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(data:Hero){
    this.selectedHero = data;
    this.messageService.add("Hero " + data.name + " was fetched");
  }
  getHeroes(){
  this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
