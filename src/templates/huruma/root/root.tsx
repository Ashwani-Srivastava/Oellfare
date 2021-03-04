import { Build, Component,
         h, Listen, Prop    }   from    '@stencil/core';

import { AuthService        }   from    'auth/auth.service';
import { ConfigService      }   from    'common/config.service';
import { EnvironmentService }   from    'common/environment.service';
import { Logger             }   from    'common/logger';

import * as ngo                 from    'assets/ngo.json';

declare var $: any;

@Component({
    tag                         :   'huruma-root',
    styleUrl                    :   'root.css',
})
export class CharityRoot {

    @Prop() ngo                 :   any                 =   ngo;

    constructor() {
        Logger.info(`Huruma Root Component :: Constructor :: App version :: v${ConfigService.appVersion}`);

        if (Build.isBrowser) {
            AuthService.initialize(this.ngo.id);
        }
    }

    /*----------------------------------------------------------*/
    /*-------------------- Lifecycle Hooks ---------------------*/
    /*----------------------------------------------------------*/

    async componentWillLoad() {
        Logger.info('Huruma root :: will load');
        EnvironmentService.init();
    }


    render() {
        return (
            <ion-app>
                <ion-router useHash={false}>

                        <ion-route url="/" component="huruma-home-oscar" />
                        <ion-route url="/about" component="huruma-about" />
                        <ion-route url="/about/awards" component="huruma-awards" />
                        <ion-route url="/about/press-coverage" component="huruma-press-coverage" />
                        <ion-route url="/about/legal" component="huruma-legal" />
                        <ion-route url="/contact" component="huruma-contact" />
                        <ion-route url="/donate" component="huruma-donate" />
                        <ion-route url="/donate/champion" component="huruma-champion" />
                        <ion-route url="/projects" component="huruma-projects" />
                        <ion-route url="/projects/:projectSlug" component="huruma-projects-detail" />
                        <ion-route url="/activities" component="huruma-activities" />
                        <ion-route url="/activities/milestones" component="huruma-activities-milestones" />
                        <ion-route url="/activities/:activityId/:activitySlug" component="huruma-activity" />
                        <ion-route url="/volunteer" component="huruma-volunteer" />

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
        Logger.info('Huruma root :: will load');
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
