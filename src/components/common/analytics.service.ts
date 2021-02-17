import { ConfigService      }   from    'common/config.service';

declare var window: any;

export class AnalyticsServiceController {

    public firebase             :   any;

    constructor() {
    }

    async initialize(fir) {
        this.firebase           =   fir;
    }

    public logCustomEvent(customObject: any): void {
        window.dataLayer.push(customObject);
    }

    public trackPage(): void {
        window.dataLayer.push({
            event: 'pageview',
            page: {
                path: document.location.pathname,
                title: document.title
            }
        });
    }

    public logEvent(eventName: string): void {
        if (['staging', 'prod', 'live'].includes(ConfigService.build)) {
            this.firebase.analytics().logEvent(eventName);
        }

    }
}

export const AnalyticsService                           =   new AnalyticsServiceController();
