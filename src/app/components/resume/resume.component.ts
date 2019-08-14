import { Component, OnInit } from '@angular/core';

import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  watbottRepoUrl: string;

  constructor() { }

  ngOnInit() {
    this.watbottRepoUrl = environment.watbottRepoUrl;
  }

}
