import { Component, h, Prop }   from    '@stencil/core';

import { VersoBase          }   from    'verso/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'verso-legal',
    styleUrl                    :   'legal-page.css'
})
export class VersoLegalPage {

    @Prop() ngo                 :   any                 =   ngo;

    constructor () {
        console.log('About - Legal :: Constructor');
    }

    async componentWillLoad() {
        console.log('About - Legal :: Component will load');
    }

    async componentDidLoad() {
        console.log('About - Legal :: Component did load');

        VersoBase.setupEssentials();
    }


    render() {

        return (

        <div class="page-wrapper">

            <verso-header ngo={this.ngo}></verso-header>

            <verso-footer ngo={this.ngo}></verso-footer>

            { HelmetService.render(this.ngo, 'Legal') }
        </div>


        );
    }

}
