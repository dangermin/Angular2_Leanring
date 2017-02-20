import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
    selector: 'authors',
    template: `
         <h2>Authors<h2>
        {{ title }}
        <ul>
            <li *ngFor="#author of authors">
            {{ author }}
            </li>
        </ul>
    `,
    providers: [AuthorService]
})
export class AuthorComponent{
    authors: string[];
    title = "Authors of Courses";

    constructor(AuthorService: AuthorService){
        this.authors = AuthorService.getAuthors();
    }
}
