import { Logger             }   from    'common/logger';

class EnvironmentServiceController {

    public config: any          =   {};

    constructor() {
        //this.init();
    }

    public init() {

        let win;
        if (typeof window !== 'undefined') {
            Logger.log('EnvironmentService :: init :: window');
            win                 =   window as any;
        } else {
            Logger.log('EnvironmentService :: init :: global');
            win                 =   global as any;
        }

        this.config             =   win.config;
        //Logger.log('EnvironmentService :: init :: ', this.config);

    }

}

export const EnvironmentService = new EnvironmentServiceController();

