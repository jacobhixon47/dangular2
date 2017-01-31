import { Component } from '@angular/core';
import { Term } from '../term.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent {
  terms: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
