class EnvironmentServiceController {

    public config: any          =   {};

    constructor() {
        //this.init();
    }

    public init() {

        let win;
        if (typeof window !== 'undefined') {
            console.log('EnvironmentService :: init :: window');
            win                 =   window as any;
        } else {
            console.log('EnvironmentService :: init :: global');
            win                 =   global as any;
        }

        this.config             =   win.config;
        console.log('EnvironmentService :: init :: ', this.config);

    }

}

export const EnvironmentService = new EnvironmentServiceController();

