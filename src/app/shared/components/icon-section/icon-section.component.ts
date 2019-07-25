import { Component, OnInit } from '@angular/core';
import {faCode, faCog, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'plr-icon-section',
  templateUrl: './icon-section.component.html',
  styleUrls: ['./icon-section.component.scss']
})
export class IconSectionComponent implements OnInit {

  faUser = faUser;
  faCog = faCog;
  faCode = faCode;

  constructor() { }

  ngOnInit() {
  }

}
