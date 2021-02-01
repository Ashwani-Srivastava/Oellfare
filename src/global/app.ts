import '@ionic/core';
import { setupConfig }      from    '../components/common/environment-config';

export default () => {
    setupConfig({
        baseUrl                 :   'https://thegrassroots.app',
        build                   :   'live'
    });
};
