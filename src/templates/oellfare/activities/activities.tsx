import { Component, h, Prop }   from    '@stencil/core';

import { OellfareBase         }   from    'oellfare/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'oellfare-activities',
    styleUrl                    :   'activities.css',
})
export class OellfareActivities {

    @Prop() ngo                 :   any                 =   ngo

    constructor () {
        console.log('Activities :: Constructor');
    }

    async componentWillLoad() {
        console.log('Activities :: Component will load');
    }

    async componentDidLoad() {
        console.log('Activities :: Component did load');

        OellfareBase.setupEssentials();
    }

    render() {

        return [

            <oellfare-header ngo={this.ngo}></oellfare-header>,

            <h1> Activities </h1>,

            <oellfare-footer ngo={this.ngo}></oellfare-footer>,

            <span> { HelmetService.render(this.ngo, 'Activities') } </span>

        ];

    }

}
