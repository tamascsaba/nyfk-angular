/**
 * Created by kaloczidavid on 2016. 10. 08..
 */

import {Component} from '@angular/core';
import {PeoplePageService} from './people.page.service';
import {Observable} from 'rxjs';

@Component({
  templateUrl: './people.page.template.html',
  styleUrls: ['people.page.style.css']
})
export class PeoplePageComponent {
  people: Observable<any>;
  peoples: Array<any>;
  constructor(private service: PeoplePageService){
    this.service.getAllPeople().subscribe(res => {
      this.peoples = res.peoples;
    });
  }
}