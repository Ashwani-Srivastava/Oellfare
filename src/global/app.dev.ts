import '@ionic/core';
import { setupConfig }      from    '../components/common/environment-config';

export default () => {
    setupConfig({
        baseUrl                 :   location.protocol + '//' + location.hostname + ':3003',
        build                   :   'dev'
    });
};
