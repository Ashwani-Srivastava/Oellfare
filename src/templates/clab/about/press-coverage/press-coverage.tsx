import { Component, h, Prop }   from    '@stencil/core';

import { ClabBase          }   from    'clab/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'clab-press-coverage',
    styleUrl                    :   'press-coverage.css',
})
export class PressCoverage {

    @Prop() ngo                 :   any                 =   ngo;

    async componentDidLoad() {
        console.log('About :: Component did load');

        ClabBase.setupEssentials();
    }



    render() {

        return (
        <div class="page-wrapper">

            <clab-header ngo={this.ngo}></clab-header>


            <clab-footer ngo={this.ngo}></clab-footer>

            { HelmetService.render(this.ngo, 'Press Coverage') }
        </div>
    );

    }

}
