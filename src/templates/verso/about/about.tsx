import { Component, h, Prop }   from    '@stencil/core';

import { VersoBase          }   from    'verso/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'verso-about',
    styleUrl                    :   'about.css',
})
export class VersoAbout {

    @Prop() ngo                 :   any                 =   ngo;

    constructor () {
        console.log('About :: Constructor');
    }

    async componentWillLoad() {
        console.log('About :: Component will load');
    }

    async componentDidLoad() {
        console.log('About :: Component did load');

        VersoBase.setupEssentials();
    }


    render() {

        return (

        <div class="page-wrapper">

            <verso-header ngo={this.ngo}></verso-header>

            <verso-footer ngo={this.ngo}></verso-footer>

            { HelmetService.render(this.ngo, 'About') }

        </div>

    );

    }

}
