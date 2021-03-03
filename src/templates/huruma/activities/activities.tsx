import { Component, h, Prop }   from    '@stencil/core';

import { HurumaBase         }   from    'huruma/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'huruma-activities',
    styleUrl                    :   'activities.css',
})
export class HurumaActivities {

    @Prop() ngo                 :   any                 =   ngo

    constructor () {
        console.log('Activities :: Constructor');
    }

    async componentWillLoad() {
        console.log('Activities :: Component will load');
    }

    async componentDidLoad() {
        console.log('Activities :: Component did load');

        HurumaBase.setupEssentials();
    }

    render() {

        return [

            <huruma-header ngo={this.ngo}></huruma-header>,

            <h1> Activities </h1>,

            <huruma-footer ngo={this.ngo}></huruma-footer>,

            <span> { HelmetService.render(this.ngo, 'Activities') } </span>

        ];

    }

}
