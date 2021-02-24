import { Component, h, Prop }   from    '@stencil/core';

import { HurumaBase         }   from    'huruma/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'huruma-projects',
    styleUrl                    :   'projects.css',
})
export class HurumaProjects {

    @Prop() ngo                 :   any                 =   ngo

    constructor () {
        console.log('Projects :: Constructor');
    }

    async componentWillLoad() {
        console.log('Projects :: Component will load');
    }

    async componentDidLoad() {
        console.log('Projects :: Component did load');

        HurumaBase.setupEssentials();
    }

    render() {

        return [

            <huruma-header ngo={this.ngo}></huruma-header>,

            <h1> Projects </h1>,

            <huruma-footer ngo={this.ngo}></huruma-footer>,

            <span> { HelmetService.render(this.ngo, 'Projects') } </span>

        ];

    }

}
