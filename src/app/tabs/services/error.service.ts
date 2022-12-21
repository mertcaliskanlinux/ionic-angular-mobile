import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private toastController: ToastController
  ) { }

  errorHandler(err: any){
    this.presentToast(err);
  }

  async presentToast(err: any) {
    const toast = await this.toastController.create({
      message: err.error,
      duration: 3000,
    });
    toast.present();
  }
}
