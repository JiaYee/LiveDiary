import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  //object variable
  diary: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  )
  {
    this.diary = this.navParams.get('diary');
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad DetailPage');
  }

  back()
  {
    this.navCtrl.pop();
  }

}
