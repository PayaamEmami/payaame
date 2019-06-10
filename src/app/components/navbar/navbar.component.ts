import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  twitterUrl: string;
  githubUrl: string;
  githubPath: string;
  logoPath: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.twitterUrl = 'https://twitter.com/payaamemami';
    this.githubUrl = 'https://github.com/payaamemami';
    this.githubPath = '../../assets/img/socials/github_white.png';
    this.logoPath = '../../assets/img/logo/payaame-logo-small.png';
    iconRegistry.addSvgIcon(
      'twitter-logo',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/socials/twitter_white.svg')
    );
   }

  ngOnInit() {
  }

}
