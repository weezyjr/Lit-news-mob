import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NewsService } from '../../services/news.service';
import { SingleNewsPage } from '../single-news/single-news';
import { HomePage } from '../home/home';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  providers: [NewsService]
})
export class NewsPage {

  public cat: String;
  public articles: Array<Object>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public newsService: NewsService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {

    // set the category
    this.cat = this.navParams.data;

    // initilize LOADER
    const LOADER = this.loadingCtrl.create({
      content: "Please wait..."
    });

    // present the LOADER
    LOADER.present();

    // get news of this category
    this.newsService.getNews(this.cat).subscribe((res) => {

      // save the articles
      this.articles = res['articles'];

      // save the articles in the service
      this.newsService.setArticles(this.articles);

      // dismiss the loader
      LOADER.dismiss();

    }, (err) => {

      // initialize Error Alert
      const alert = this.alertCtrl.create({
        title: 'Smothing Went Wrong',
        message: `${err['message']} .. 
        Please check your connection and try again!
        `,
        buttons: [
          {
            text: 'Ok',
            handler: data => {
              // navigate to home page
              this.navCtrl.setRoot(HomePage)
            }
          }]
      });

      // present the error
      alert.present();

      // dismiss the loader in the background
      LOADER.dismiss();
    });

  }

  goToSingleNews(article) {
    this.navCtrl.push(SingleNewsPage, article);
  }

  search(ev: any) {

    // set the articles back to the unfiltered articles saved in the service
    this.articles = this.newsService.getArticles();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.articles = this.articles.filter((article) => {
        // filter using the title, source or description
        if (article['title'])
          return (article['title'].toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  }

}
