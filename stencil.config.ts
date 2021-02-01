import { Config             }   from    '@stencil/core';

let globalScript                :   string              =   'src/global/app.ts';

const dev: boolean = 
           process.argv && process.argv.indexOf('--dev') > -1;

if (dev) {
    globalScript = 'src/global/app.dev.ts';
}

export const config: Config = {
    globalScript: globalScript,
    globalStyle: 'src/global/app.css',
    taskQueue: 'async',
    outputTargets: [{
        type: 'www',
        serviceWorker: null,
        baseUrl:'https://css-grassroots.web.app/',
        prerenderConfig: './prerender.config.ts',
    }],
};
