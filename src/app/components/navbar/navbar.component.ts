import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  twitterProfileUrl: string;
  githubProfileUrl: string;
  githubLogoImage = '../../assets/img/socials/github_white.png';
  payaamLogoImage = '../../assets/img/logo/payaame-logo-small.png';

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.twitterProfileUrl = environment.twitterUrl;
    this.githubProfileUrl = environment.githubUrl;
    this.iconRegistry.addSvgIcon(
      'twitter-logo',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/socials/twitter_white.svg')
    );
  }

}
