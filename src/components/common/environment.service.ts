import { EnvironmentConfig  }  from     './environment-config';

class EnvironmentServiceController {

    private m: Map<keyof EnvironmentConfig, any>;

    constructor() {
        // Private constructor, singleton
        this.init();
    }

    private init() {
        if (!window) {
            return;
        }

        const win = window as any;
        const Grassroots = win.Grassroots;

        this.m = new Map<keyof EnvironmentConfig, any>(Object.entries(Grassroots.config) as any);
    }

    get(key: keyof EnvironmentConfig, fallback?: any): any {
        const value = this.m.get(key);
        return (value !== undefined) ? value : fallback;
    }

}

export const EnvironmentService = new EnvironmentServiceController();

