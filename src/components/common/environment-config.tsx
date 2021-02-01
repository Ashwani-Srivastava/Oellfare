// https://medium.com/stencil-tricks/environment-variables-with-stenciljs-57e9da591280
// The interface which define the list of variables
export interface EnvironmentConfig {
    baseUrl                     :   string;
    build                       :   string;
}

export function setupConfig(config: EnvironmentConfig) {
    if (!window) {
        return;
    }

    const win                   =   window as any;
    const Grassroots            =   win.Grassroots;

    if (Grassroots && Grassroots.config && 
        Grassroots.config.constructor.name !== 'Object') {
        console.error('Grassroots config was already initialized');
        return;
    }

    win.Grassroots              =   win.Grassroots || {};
    win.Grassroots.config       =   {
        ...win.Grassroots.config,
        ...config
    };

    return win.Grassroots.config;
}
