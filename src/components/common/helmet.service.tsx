import { h                  }   from    '@stencil/core';
import Helmet                   from    '@stencil/helmet';

import { EnvironmentService }   from    'common/environment.service';
import { UtilityService     }   from    'common/utility.service';

class HelmetServiceController {
    constructor() {}

    public render(ngo: any, pageName: string) {
        console.log('HelmetService :: ', EnvironmentService.config);
        return (
            <Helmet>
                <title> { UtilityService.getMetaTitle(`${pageName} - ${ngo.name} Ngo`) } </title>
                <meta name="description" content={ `${pageName} - ${ ngo.name } in ${ ngo.district.name }. ${ ngo.description }` } />
                <meta name="keywords" content={ `${ ngo.name }, ngo, ${ ngo.district.name }, ${ ngo.causes.join(', ') }` } />

                <meta property="og:title" content={ UtilityService.getMetaTitle(`${pageName} - ${ngo.name} Ngo`) }/>
                <meta property="og:description" content={ `${pageName} - ${ ngo.name } ngo in ${ ngo.district.name } working for ${ ngo.description }` } />
                <meta property="og:image" content={ ngo.logo.url } />
                <meta property="og:url" content={ EnvironmentService.config.baseUrl + pageName === 'Home' ? '/' : pageName.replace(/\s/g, '-').toLowerCase() } />

                <meta name="twitter:card" content="summary_large_image" />
            
            </Helmet>
        );
    }

}

export const HelmetService = new HelmetServiceController();
