import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {AuthService} from "./auth/auth.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-project-2';

  public isSidenavOpened: boolean = true;

  constructor(
    private matIconRegistry: MatIconRegistry,
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.matIconRegistry.setDefaultFontSetClass('material-symbols-rounded');
  }

  public toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
