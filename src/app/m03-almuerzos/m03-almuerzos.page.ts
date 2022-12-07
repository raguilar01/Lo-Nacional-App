import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-m03-almuerzos',
  templateUrl: './m03-almuerzos.page.html',
  styleUrls: ['./m03-almuerzos.page.scss'],
})
export class M03AlmuerzosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  m03_almuerzos(){

    this.router.navigate(['/ini-menu'])
  }
}
