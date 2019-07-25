import { Component, OnInit } from '@angular/core';
import {Language} from '../../shared/models/language';
import {LanguageService} from '../../shared/providers/language.service';
import {Observable} from 'rxjs';
import {faAlignRight, faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'plr-list',
  templateUrl: './plr-list.component.html',
  styleUrls: ['./plr-list.component.scss']
})
export class PlrListComponent implements OnInit {

  languageList: Observable<Language[]>;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageList = this.languageService.getProgrammingLanguageList();
  }


}
