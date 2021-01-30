declare var window: any;

/**
 * This service has build level, application level configurations. Build configurations
 * affect some parameters like 
 *  * Base URL for Web Service (Firebase cloud http functions),
 *  * Turn On/Off debug variables in some services,
 *  * Whether to enable Analytics and Remote logs.
 */
export class ConfigServiceController {

    public firstLoad            :   boolean             =   true;
    public loadTime             :   number              =   250;
    public appVersion           :   string              =   '0.9.9-10';
    public remoteData           :   boolean             =   true;

    public baseStorageURL       =   {
        'dev-local'             :   'https://firebasestorage.googleapis.com/v0/b/gr-auto-repo.appspot.com/o',
        'dev'                   :   'https://firebasestorage.googleapis.com/v0/b/gr-auto-repo.appspot.com/o',
        'staging'               :   '',
        'automation'            :   '',
        'uat'                   :   'https://firebasestorage.googleapis.com/v0/b/gr-prod.appspot.com/o',
        'live'                  :   'https://firebasestorage.googleapis.com/v0/b/gr-live.appspot.com/o'
    }

    public baseAppURL           =   {
        'dev-local'             :   'http://localhost:3333/',
        'dev'                   :   'https://gr-prod.web.app',
        'staging'               :   '',
        'automation'            :   '',
        'uat'                   :   'httpe://uat.thegrassroots.app',
        'live'                  :   'https://thegrassroots.app'
    }

    public baseCFURL            =   {
        'dev-local'             :   'https://asia-east2-gr-auto-repo.cloudfunctions.net',
        'dev'                   :   'https://asia-east2-gr-auto-repo.cloudfunctions.net',
        'staging'               :   '',
        'automation'            :   '',
        'uat'                   :   'https://us-central1-gr-prod.cloudfunctions.net',
        'live'                  :   'https://asia-east2-gr-live.cloudfunctions.net'
    }

    /**
     * Token of LogEntries API
     */
    public logEntriesToken      =   {
        'dev-local'             :   '',
        'dev'                   :   '71899c94-716b-4920-abbb-362266a85608',
        'staging'               :   '',
        'automation'            :   '',
        'uat'                   :   'bc230109-0512-46d5-8ca6-4b8034ab8411',
        'live'                  :   '535ace70-5e15-4431-af60-1c34460e6070'
    };

    public analtyticsTrackingID =   {
        'dev-local'             :   '',
        'dev'                   :   '',
        'staging'               :   '',
        'automation'            :   '',
        'uat'                   :   '',
        'prod'                  :   '',
        'live'                  :   'UA-165458551-2'
    };

    public googleMapsAPIKey     =   {
        'dev-local'             :   'AIzaSyBybycVbFpL0C0_cXE0uYf7xTxprGFbWE0',
        'dev'                   :   'AIzaSyDdchVLui5RgomLXFD2n2xRQcCQIGa582s',
        'staging'               :   'AIzaSyC_6fYvWduzpHKTlV3A-fe--uEPe9nRw3U',
        'automation'            :   '',
        'uat'                   :   'AIzaSyBjw6cosgnO-BYqzcN75D7PzNZUjPIM7Jc',
        'prod'                  :   'AIzaSyAlMtPOqVXKOvAV-ZjbHKAWuOyx1Hr0JZ8',
        'live'                  :   '',
    };

    public razorpayKey          =   window.razorpayKey;
    public razorpayPlanId       =   window.razorpayPlanId;

    public defaultLanguage      =   "en";

    /**
     * Determines API endpoint and affects Analytics, Remote logging functionalities.
     * Can have following values:
     *      dev-local           -   connected to instance `dev-local`
     *                              logs goes only to Browser console
     *                              Analytics is off
     *                              localhost:3333/
     *
     *      dev                 -   connected to instance `dev-local`
     *                              logs goes to Browser console and also to LogEntries with dev token
     *                              Analytics is off
     *                              dev.thegrassroots.app
     *
     *      uat                 -   connected to instance `prod`
     *                              logs goes to Browser console and also to LogEntries with uat token
     *                              Analytics is off
     *                              uat.thegrassroots.app
     *
     *      live                -   connected to instance `live`
     *                              logs goes to LogEntries with live token
     *                              Analytics is On
     *                              thegrassroots.app
     */
    //public build                =   window.build;
    //public build                =   'prod';
    public build                =   'live';

    public cacheTTL             =   {
        defaultVal              :   60 * 60, // 1 hour

        notificationList        :   60 * 2,

        eventList               :   60 / 10, // Expermenting
        ngoList                 :   60 * 60 * 24 * 7,   // 7 days

        myProfile               :   60 * 10, // 10 minutes
        othersProfile           :   60 * 60, // 1 hour

        masterState             :   60 * 60 * 24 * 30,  // 1 month
        masterDistrict          :   60 * 60 * 24 * 30,  // 1 month
        masterBlock             :   60 * 60 * 24 * 7,   // 7 days
        masterCause             :   60 * 60 * 24 * 30,  // 1 month
        masterTime              :   60 * 60 * 24 * 30   // 1 month

    };

    initialize() {

        if (this.build === "dev-local") {
            this.cacheTTL.defaultVal                    =   1;

            this.cacheTTL.notificationList              =   1;

            this.cacheTTL.eventList                     =   1;
            this.cacheTTL.ngoList                       =   1;

            this.cacheTTL.myProfile                     =   1;
            this.cacheTTL.othersProfile                 =   1;

            this.cacheTTL.masterState                   =   1;
            this.cacheTTL.masterDistrict                =   1;
            this.cacheTTL.masterBlock                   =   1;
            this.cacheTTL.masterCause                   =   1;
            this.cacheTTL.masterTime                    =   1;
        }

        return Promise.resolve();
    }

    public firbaseKeys          =   {
        'dev-local'             :   {
            apiKey: "AIzaSyDZhUcctNSFf59Pi30nstAD9mnZxQ9ULhM",
            authDomain: "gr-auto-repo.firebaseapp.com",
            databaseURL: "https://gr-auto-repo.firebaseio.com",
            projectId: "gr-auto-repo",
            storageBucket: "gr-auto-repo.appspot.com",
            messagingSenderId: "398708353403",
            appId: "1:398708353403:web:be0d088382e5c22c6275de"
        },
        'dev'                   :   {
            apiKey: "AIzaSyCxlgL4x-ls-RoQNxyxCf6vdRkFd_hlDkM",
            authDomain: "gr-prod.firebaseapp.com",
            databaseURL: "https://gr-prod.firebaseio.com",
            projectId: "gr-prod",
            storageBucket: "gr-prod.appspot.com",
            messagingSenderId: "839974599587",
            appId: "1:839974599587:web:bd76a9a641d8afab95f816",
            measurementId: "G-18DP0FDSCZ"
        },
        'live'                  :   {
            apiKey: "AIzaSyCf5KZ2D8y8nt5YpuxtkhZN1iOmUK2DCUk",
            authDomain: "gr-live.firebaseapp.com",
            databaseURL: "https://gr-live.firebaseio.com",
            projectId: "gr-live",
            storageBucket: "gr-live.appspot.com",
            messagingSenderId: "47976454273",
            appId: "1:47976454273:web:7ba7f5e9e573da87b59580",
            measurementId: "G-MS5CEGJ6Z9"
        }
    };

}

export const ConfigService        =   new ConfigServiceController();
