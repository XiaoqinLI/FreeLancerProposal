import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15, 'Google', 'http://www.google.com', 'Ruby on Rails',
        150, 120, 15, 'google@gamil.com')
    proposalTwo: Proposal = new Proposal(30, "FB", 'http://www.facebook.com', 'Ruby on Rails',
        150, 120, 15, 'google@gamil.com')
    proposalThree: Proposal = new Proposal(20, "Linkedin", 'http://www.linkedin.com', 'Ruby on Rails',
        150, 120, 15, 'google@gamil.com')

    proposals: Proposal[] = [
        this.proposalOne,
        this.proposalTwo,
        this.proposalThree
    ]
}