import '@ionic/core';

export default () => {

    let win;
    if (typeof window !== 'undefined') {
        win                     =   window as any;
    } else {
        win                     =   global as any;
    }

    /*
    win.config                  =   {};
    win.config.baseUrl          =   location.protocol + '//' + location.hostname + ':3003';
    win.config.baseCFUrl        =   'https://asia-east2-gr-auto-repo.cloudfunctions.net';
    win.config.build            =   'dev';

    win.config.firebase         =   {
        apiKey                  :   "AIzaSyDZhUcctNSFf59Pi30nstAD9mnZxQ9ULhM",
        authDomain              :   "gr-auto-repo.firebaseapp.com",
        databaseURL             :   "https://gr-auto-repo.firebaseio.com",
        projectId               :   "gr-auto-repo",
        storageBucket           :   "gr-auto-repo.appspot.com",
        messagingSenderId       :   "398708353403",
        appId                   :   "1:398708353403:web:be0d088382e5c22c6275de"
    };

    win.config.razorpay         =   {
        key                     :   'rzp_test_khebg4URfgOTGT'
    };
    */

    win.config                  =   {};
    win.config.baseUrl          =   'https://thegrassroots.app';
    win.config.baseCFUrl        =   'https://asia-east2-gr-live.cloudfunctions.net';
    win.config.build            =   'live';

    win.config.firebase         =   {
        apiKey                  :   "AIzaSyCf5KZ2D8y8nt5YpuxtkhZN1iOmUK2DCUk",
        authDomain              :   "gr-live.firebaseapp.com",
        databaseURL             :   "https://gr-live.firebaseio.com",
        projectId               :   "gr-live",
        storageBucket           :   "gr-live.appspot.com",
        messagingSenderId       :   "47976454273",
        appId                   :   "1:47976454273:web:7ba7f5e9e573da87b59580",
        measurementId           :   "G-MS5CEGJ6Z9"
    };

    win.config.razorpay         =   {
        key                     :   'rzp_live_JRVjeL7iLec4Ck'
    };


    //console.log(win.config);

};
