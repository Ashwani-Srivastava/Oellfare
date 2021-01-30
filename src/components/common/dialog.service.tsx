export enum ConfirmResponse {
    Success,
    Cancel,
    Error
}

import { Logger             }   from    'common/logger';

class DialogServiceController {

    private defaultLoader: any      =   null;

    constructor() {
    }

    public async presentAlert(title: string, message: string): Promise<any> {
        const alert             =   document.createElement('ion-alert');
        alert.header            =   title;
        //alert.subHeader         =   'Subtitle';
        alert.message           =   message;
        alert.buttons           =   ['OK'];

        document.body.appendChild(alert);
        return alert.present();
    }

    public async presentConfirmAlert(title: string, message: string): Promise<ConfirmResponse> {
        return new Promise((resolve) => {
            const alert         =   document.createElement('ion-alert');
            alert.header        =   title;
            alert.message       =   message;
            alert.buttons       =   [{
                text            :   'Cancel',
                role            :   'cancel',
                cssClass        :   'secondary',
                handler         :   () => {
                    resolve(ConfirmResponse.Cancel);
                }
            }, {
                text            :   'Okay',
                cssClass        :   'primary',
                handler         :   () => {
                    console.log('Confirm Okay')
                    resolve(ConfirmResponse.Success);
                }
            }];

            document.body.appendChild(alert);
            alert.present();
        });
    }

    public async presentToast(message: string): Promise<any> {
        const toast             =   document.createElement('ion-toast');
        toast.message           =   message;
        toast.duration          =   2000;

        document.body.appendChild(toast);
        return toast.present();
    }

    public async presentDefaultLoader(): Promise<any> {
        if (this.defaultLoader) return;
        const loading = document.createElement('ion-loading');
        loading.message = 'Please wait...';
        this.defaultLoader = loading;

        document.body.appendChild(loading);
        await loading.present();
        return loading;
    }

    public async dismissDefaultLoader() {
        this.defaultLoader.dismiss();
        Logger.log('DialogService :: dismissDefaultLoader');
        this.defaultLoader =    null;
    }

    public async presentLoader(): Promise<any> {
        const loading = document.createElement('ion-loading');
        loading.message = 'Please wait...';

        document.body.appendChild(loading);
        await loading.present();
        return loading;
    }

    public async dismissLoader(loading: any) {
        loading.dismiss();
    }

}

export const DialogService = new DialogServiceController();
