import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  //list variables
  diaries: any = [];

  constructor(
    public common: CommonProvider,
    public storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams
  )
  {
  }

  ionViewDidEnter()
  {
    this.storage.get('diaries').then((res: any) => {
      if(res !== null)
      {
        this.diaries = res;
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  view(diary)
  {
    this.navCtrl.push('DetailPage', { diary });
  }

  goAdd()
  {
    let diaries = this.diaries;
    this.navCtrl.push('AddPage', { diaries });
  }

  delete(diary)
  {
    let id = diary.id;
    this.diaries.splice(this.diaries.map(x => x.id).indexOf(id), 1);
    this.storage.set('diaries', this.diaries);
    this.common.showToast("Diary deleted");
  }

}
