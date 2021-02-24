import { Component, h, Prop }   from    '@stencil/core';

import { HurumaBase         }   from    'huruma/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    '../../../../assets/ngo.json';

@Component({
    tag                         :   'huruma-legal',
    styleUrl                    :   'legal-page.css'
})
export class HurumaLegalPage {

    @Prop() ngo                 :   any                 =   ngo;

    constructor () {
        console.log('About - Legal :: Constructor');
    }

    async componentWillLoad() {
        console.log('About - Legal :: Component will load');
    }

    async componentDidLoad() {
        console.log('About - Legal :: Component did load');

        HurumaBase.setupEssentials();
    }


    render() {

        return [

            <huruma-header ngo={this.ngo}></huruma-header>,

            <h1> About us - Legal </h1>,

            <huruma-footer ngo={this.ngo}></huruma-footer>,

            <span> { HelmetService.render(this.ngo, 'Legal') } </span>


        ];
    }

}
