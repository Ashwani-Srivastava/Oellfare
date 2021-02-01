import '@ionic/core';

export default () => {

    let win;
    if (typeof window !== 'undefined') {
        win                     =   window as any;
    } else {
        win                     =   global as any;
    }

    win.config                  =   {};
    win.config.baseUrl          =   location.protocol + '//' + location.hostname + ':3003';
    win.config.build            =   'dev';
    win.config.firebase         =   {
        apiKey: "AIzaSyDZhUcctNSFf59Pi30nstAD9mnZxQ9ULhM",
        authDomain: "gr-auto-repo.firebaseapp.com",
        databaseURL: "https://gr-auto-repo.firebaseio.com",
        projectId: "gr-auto-repo",
        storageBucket: "gr-auto-repo.appspot.com",
        messagingSenderId: "398708353403",
        appId: "1:398708353403:web:be0d088382e5c22c6275de"
    };

};
