import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SingleNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-single-news',
  templateUrl: 'single-news.html',
})
export class SingleNewsPage {

  public article: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.article = this.navParams.data
  }
}
