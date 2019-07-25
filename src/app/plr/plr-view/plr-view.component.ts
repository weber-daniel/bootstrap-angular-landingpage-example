import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Language} from '../../shared/models/language';
import {Observable, pipe} from 'rxjs';
import {LanguageService} from '../../shared/providers/language.service';
import {filter, first, map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'plr-view',
  templateUrl: './plr-view.component.html',
  styleUrls: ['./plr-view.component.scss']
})
export class PlrViewComponent implements OnInit {

  viewID: number;
  viewLanguage: Language;

  constructor(private activatedRoute: ActivatedRoute, private languageService: LanguageService) { }

  ngOnInit() {
    this.viewID = this.activatedRoute.snapshot.params['id'];

    if (!isNaN(this.viewID)) {
       this.getViewLanguage(this.viewID).subscribe((viewLanguage: Language) => {
         console.log(viewLanguage);
         this.viewLanguage = viewLanguage;
       });
    }
  }

  getViewLanguage(viewID: number): Observable<Language> {
    return this.languageService.getProgrammingLanguageById(viewID);
  }

}
