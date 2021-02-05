import '@ionic/core';

export default () => {

    let win;
    if (typeof window !== 'undefined') {
        console.log('win is window');
        win                     =   window as any;
    } else {
        console.log('win is global');
        win                     =   global as any;
    }

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

    console.log(win.config);

};
