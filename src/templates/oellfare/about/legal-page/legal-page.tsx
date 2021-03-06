import { Component, h, Prop }   from    '@stencil/core';

import { OellfareBase          }   from    'oellfare/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'oellfare-legal',
    styleUrl                    :   'legal-page.css'
})
export class OellfareLegalPage {

    @Prop() ngo                 :   any                 =   ngo;

    constructor () {
        console.log('About - Legal :: Constructor');
    }

    async componentWillLoad() {
        console.log('About - Legal :: Component will load');
    }

    async componentDidLoad() {
        console.log('About - Legal :: Component did load');

        OellfareBase.setupEssentials();
    }


    render() {

        return (

        <div class="page-wrapper">

            <oellfare-header ngo={this.ngo}></oellfare-header>

            <oellfare-footer ngo={this.ngo}></oellfare-footer>

            { HelmetService.render(this.ngo, 'Legal') }
        </div>


        );
    }

}
