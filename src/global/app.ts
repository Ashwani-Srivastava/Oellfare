import '@ionic/core';

export default () => {

    let win;
    if (typeof window !== 'undefined') {
        win                     =   window as any;
    } else {
        win                     =   global as any;
    }

    win.config                  =   {};
    win.config.baseUrl          =   'https://thegrassroots.app';
    win.config.build            =   'live';
    win.config.firebase         =   {
        apiKey: "AIzaSyCf5KZ2D8y8nt5YpuxtkhZN1iOmUK2DCUk",
        authDomain: "gr-live.firebaseapp.com",
        databaseURL: "https://gr-live.firebaseio.com",
        projectId: "gr-live",
        storageBucket: "gr-live.appspot.com",
        messagingSenderId: "47976454273",
        appId: "1:47976454273:web:7ba7f5e9e573da87b59580",
        measurementId: "G-MS5CEGJ6Z9"
    };

};
