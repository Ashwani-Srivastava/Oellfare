import { Build, Component, h }   from    '@stencil/core';

import { AuthService        }   from    'auth/auth.service';
import { ConfigService      }   from    'common/config.service';
import { EnvironmentService }   from    'common/environment.service';
import { Logger             }   from    'common/logger';

@Component({
    tag                         :   'app-root',
    styleUrl                    :   'app-root.css',
})
export class AppRoot {

    constructor() {
        Logger.info(`AppRoot Component :: Constructor :: App version :: v${ConfigService.appVersion}`);

        if (Build.isBrowser) {
            AuthService.initialize();
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

                    { /*
                    <ion-route url="/" component="charity-home" />
                    <ion-route url="/about" component="charity-about" />
                    <ion-route url="/about/press-coverage" component="charity-press-coverage" />
                    <ion-route url="/about/legal" component="charity-legal" />
                    <ion-route url="/contact" component="charity-contact" />
                    <ion-route url="/donate" component="charity-donate" />
                    <ion-route url="/projects" component="charity-projects" />
                    <ion-route url="/projects/:projectSlug" component="charity-projects-detail" />
                    <ion-route url="/volunteer" component="charity-volunteer" />
                       */ }

                    <ion-route url="/" component="proffer-home" />
                    <ion-route url="/about" component="proffer-about" />
                    <ion-route url="/about/press-coverage" component="proffer-press-coverage" />
                    <ion-route url="/about/legal" component="proffer-legal" />
                    <ion-route url="/contact" component="proffer-contact" />
                    <ion-route url="/donate" component="proffer-donate" />
                    <ion-route url="/projects" component="proffer-projects" />
                    <ion-route url="/projects/:projectSlug" component="proffer-projects-detail" />
                    <ion-route url="/volunteer" component="proffer-volunteer" />

                </ion-router>
                <ion-nav />
            </ion-app>
        );
    }
}
