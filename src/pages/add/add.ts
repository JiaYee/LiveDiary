import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  //list variables
  diaries: any;

  constructor(
    public common: CommonProvider,
    public storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams
  )
  {
    this.diaries = this.navParams.get('diaries');
  }

  ionViewDidLoad()
  {
  }

  cancel()
  {
    this.navCtrl.pop();
  }

  addDiary(title, date, text)
  {
    this.diaries.push({
      id: Date.now(),
      title: title,
      date: date,
      text: text
    })
    this.storage.set('diaries', this.diaries);
    this.navCtrl.pop();
    this.common.showToast("Diary added!");
  }
}
