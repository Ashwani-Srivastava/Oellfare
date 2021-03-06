import { Component, h, Prop }   from    '@stencil/core';

import { OellfareBase        }   from    'oellfare/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'oellfare-projects',
    styleUrl                    :   'projects.css',
})
export class OellfareProjects {

    @Prop() ngo                 :   any                 =   ngo

    constructor () {
        console.log('Projects :: Constructor');
    }

    async componentWillLoad() {
        console.log('Projects :: Component will load');
    }

    async componentDidLoad() {
        console.log('Projects :: Component did load');

        OellfareBase.setupEssentials();
    }

    render() {

        return (

        <div class="page-wrapper">
            <oellfare-header ngo={this.ngo}></oellfare-header>

            <oellfare-footer ngo={this.ngo}></oellfare-footer>

            { HelmetService.render(this.ngo, 'Projects') }
        </div>

        );

    }

}
