import { Build, Component,
         h, Listen, Prop    }   from    '@stencil/core';

import { AuthService        }   from    'auth/auth.service';
import { ConfigService      }   from    'common/config.service';
import { EnvironmentService }   from    'common/environment.service';
import { Logger             }   from    'common/logger';

import * as ngo                 from    'assets/ngo.json';

declare var $: any;

@Component({
    tag                         :   'charity-root',
    styleUrl                    :   'root.css',
})
export class CharityRoot {

    @Prop() ngo                 :   any                 =   ngo;

    constructor() {
        Logger.info(`AppRoot Component :: Constructor :: App version :: v${ConfigService.appVersion}`);

        if (Build.isBrowser) {
            AuthService.initialize(this.ngo.id);
        }
    }

    /*----------------------------------------------------------*/
    /*-------------------- Lifecycle Hooks ---------------------*/
    /*----------------------------------------------------------*/

    async componentWillLoad() {
        Logger.info('App root :: will load');
        EnvironmentService.init();
    }


    render() {
        return (
            <ion-app>
                <ion-router useHash={false}>

                    <ion-route url="/" component="charity-home" />
                    <ion-route url="/about" component="charity-about" />
                    <ion-route url="/about/press-coverage" component="charity-press-coverage" />
                    <ion-route url="/about/legal" component="charity-legal" />
                    <ion-route url="/contact" component="charity-contact" />
                    <ion-route url="/donate" component="charity-donate" />
                    <ion-route url="/projects" component="charity-projects" />
                    <ion-route url="/projects/:projectSlug" component="charity-projects-detail" />
                    <ion-route url="/volunteer" component="charity-volunteer" />

                </ion-router>
                <ion-nav />

                <ion-fab horizontal="start" vertical="bottom">
                    <ion-fab-button color='primary' href={`https://api.whatsapp.com/send?phone=${this.ngo.reachOut.phone1}&text=Hi. I like to support ${this.ngo.name}.`}>
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </ion-fab-button>
                </ion-fab>

            </ion-app>
        );
    }


    async componentDidLoad() {
        Logger.info('App root :: will load');
    }

    @Listen("swUpdate", { target: 'window' })
    async onServiceWorkerUpdate() {
        const registration = await navigator.serviceWorker.getRegistration();

        if (!registration?.waiting) {
            // If there is no waiting registration, this is the first service
            // worker being installed.
            return;
        }

        const toast = document.createElement('ion-toast');
        toast.message = 'New version available';
        toast.buttons = [{
            text: 'Update',
            role: 'cancel',
            handler: () => {
                console.log('Cancel clicked');
            }
        }];
        toast.duration = 5000;

        document.body.appendChild(toast);
        await toast.present();

        const { role } = await toast.onWillDismiss();

        if (role === 'reload') {
            registration.waiting.postMessage("skipWaiting");
        }
    }

}
