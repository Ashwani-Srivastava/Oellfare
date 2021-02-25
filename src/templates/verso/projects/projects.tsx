import { Component, h, Prop }   from    '@stencil/core';

import { VersoBase        }   from    'verso/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'verso-projects',
    styleUrl                    :   'projects.css',
})
export class VersoProjects {

    @Prop() ngo                 :   any                 =   ngo

    constructor () {
        console.log('Projects :: Constructor');
    }

    async componentWillLoad() {
        console.log('Projects :: Component will load');
    }

    async componentDidLoad() {
        console.log('Projects :: Component did load');

        VersoBase.setupEssentials();
    }

    render() {

        return (

        <div class="page-wrapper">
            <verso-header ngo={this.ngo}></verso-header>

            <verso-footer ngo={this.ngo}></verso-footer>

            { HelmetService.render(this.ngo, 'Projects') }
        </div>

        );

    }

}
