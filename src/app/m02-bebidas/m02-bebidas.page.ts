import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-m02-bebidas',
  templateUrl: './m02-bebidas.page.html',
  styleUrls: ['./m02-bebidas.page.scss'],
})
export class M02BebidasPage implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  menu(){
    this.router.navigate(['/ini-menu'])
  }

}
