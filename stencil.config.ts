import { Config             }   from    '@stencil/core';

let globalScript                :   string              =   'src/global/app.ts';

const dev: boolean = 
    process.argv && process.argv.indexOf('--dev') > -1;

if (dev) {
    globalScript = 'src/global/app.dev.ts';
}

export const config: Config = {
    buildEs5: 'prod',
    globalScript: globalScript,
    globalStyle: 'src/global/app.css',
    taskQueue: 'async',

    outputTargets: [{
        type: 'www',
        serviceWorker: {
            globPatterns: [
                '**/*.{js,css,json,html,ico,png}'
            ]
        },

        baseUrl:'https://oscared.org/',
        prerenderConfig: './prerender.config.ts',
    }],
};
