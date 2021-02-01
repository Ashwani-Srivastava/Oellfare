import '@ionic/core';
import { setupConfig }      from    '../components/common/environment-config';

export default () => {
    setupConfig({
        baseUrl                 :   location.protocol + '//' + location.hostname + ':3003',
        build                   :   'dev',
        firebase                :   {
            apiKey: "AIzaSyDZhUcctNSFf59Pi30nstAD9mnZxQ9ULhM",
            authDomain: "gr-auto-repo.firebaseapp.com",
            databaseURL: "https://gr-auto-repo.firebaseio.com",
            projectId: "gr-auto-repo",
            storageBucket: "gr-auto-repo.appspot.com",
            messagingSenderId: "398708353403",
            appId: "1:398708353403:web:be0d088382e5c22c6275de"
        }
    });
};
