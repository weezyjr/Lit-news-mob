import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cats: Array<Object>
  constructor(public navCtrl: NavController) {
    this.cats = [
      {
        "title": "Business",
        "img": "../../assets/imgs/Business.png"
      },
      {
        "title": "Entertainment",
        "img": "../../assets/imgs/Entertainment.png"
      },
      {
        "title": "General",
        "img": "../../assets/imgs/General.png"
      },{
        "title": "Health",
        "img": "../../assets/imgs/Health.png"
      },{
        "title": "Science",
        "img": "../../assets/imgs/Science.png"
      },
      {
        "title": "Sports",
        "img": "../../assets/imgs/Sports.png"
      },{
        "title": "Technology",
        "img": "../../assets/imgs/Technology.png"
      }
    ]
  }

  openNews(title){
    this.navCtrl.push(NewsPage,title)
  }

}
