import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ini-menu',
  templateUrl: './ini-menu.page.html',
  styleUrls: ['./ini-menu.page.scss'],
})
export class IniMenuPage implements OnInit {

  /**constructor(public navCtrl: NavController) { }**/
  constructor(private router: Router) { }
  ngOnInit() {
  }


  m02_bebidas(){

    this.router.navigate(['/m02-bebidas'])
  }
  m03_almuerzos(){

    this.router.navigate(['/m03-almuerzos'])
  }
  m04_desayunos(){

    this.router.navigate(['/m04-desayunos'])}

  m05_cenas(){

      this.router.navigate(['/m05-cenas'])}
 
  m06_refacciones(){

        this.router.navigate(['/m06-refacciones'])}

}
