import { Injectable } from '@angular/core';
import { Term } from './term.model';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class TermService {

  terms: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.terms = angularFire.database.list('terms');
  }

  getTerms() {
    return this.terms;
  }

  addTerm(newTerm: Term) {
    this.terms.push(newTerm);
  }

}
