class EnvironmentServiceController {

    public config: any          =   {};

    constructor() {
        this.init();
    }

    private init() {

        let win;
        if (typeof window !== 'undefined') {
            win                 =   window as any;
        } else {
            win                 =   global as any;
        }

        this.config             =   win.config;

    }

}

export const EnvironmentService = new EnvironmentServiceController();

