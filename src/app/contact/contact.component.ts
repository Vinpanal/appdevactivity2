import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contact: string;
  public userlist = [
    {
      contact: 1,
      name: 'Phone No: 09954715520'
    },
    {
      contact: 2,
      name: 'Facebook: Vin Panal indita'
    },
    {
      contact: 3,
      name: 'Email: panalmarvin791@gmail.com'
    },

  ]
  constructor(private activatedRoute: ActivatedRoute, public actionsheetCtrl: ActionSheetController, public alertCtrl: AlertController) { }

  
  ngOnInit() {
    this.contact = this.activatedRoute.snapshot.paramMap.get('contact');
  }
  async showactionButtons(index: number) {
    let actionSheet = this.actionsheetCtrl.create({
      header: 'Select',
      cssClass: 'buttons-css',
      animated: true,
      backdropDismiss: true,
      keyboardClose: false,
      mode: 'ios',
   
      buttons: [
        {
          text: 'Trash',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
              this.userlist.splice(index, 1);
           this.showAlert();
          }
        
        },
        {
          text: 'MAIL',
          role: 'mail', 
          icon: 'mail',
          handler: () => {
            this.userlist.splice(index, 0);
           this.Alert();
          }
        }
      ]
    });
     (await actionSheet).present();
  }
  async showAlert() {
    const alert = this.alertCtrl.create({
      header: 'Contact Successfully Deleted!',
      buttons: ['OK'],
    });
    (await alert).present();
  }
  async Alert() {
    const alert = this.alertCtrl.create({
      header: 'CONTACT ME THANKS ',
      buttons: ['OK'],
    });
    (await alert).present();
  }
  
  }