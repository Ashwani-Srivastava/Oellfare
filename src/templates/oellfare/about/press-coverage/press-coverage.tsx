import { Component, h, Prop }   from    '@stencil/core';

import { OellfareBase          }   from    'oellfare/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'oellfare-press-coverage',
    styleUrl                    :   'press-coverage.css',
})
export class PressCoverage {

    @Prop() ngo                 :   any                 =   ngo;

    async componentDidLoad() {
        console.log('About :: Component did load');

        OellfareBase.setupEssentials();
    }



    render() {

        return (
        <div class="page-wrapper">

            <oellfare-header ngo={this.ngo}></oellfare-header>


            <oellfare-footer ngo={this.ngo}></oellfare-footer>

            { HelmetService.render(this.ngo, 'Press Coverage') }
        </div>
    );

    }

}
