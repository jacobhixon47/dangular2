import { Component } from '@angular/core';
import { Term } from '../term.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { TermService } from '../term.service';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss'],
  providers: [TermService]
})
export class GlossaryComponent {
  terms: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private termService: TermService) { }

  ngOnInit() {
    this.terms = this.termService.getTerms();
  }

  submitForm(term: string, definition: string) {
    var newTerm: Term = new Term(term, definition);
    this.termService.addTerm(newTerm);
  }

}
