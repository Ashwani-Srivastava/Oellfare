import { Component, h, Prop }   from    '@stencil/core';

import { HurumaBase         }   from    'huruma/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'huruma-events',
    styleUrl                    :   'events.css',
})
export class HurumaEvents {

    @Prop() ngo                 :   any                 =   ngo

    constructor () {
        console.log('Events :: Constructor');
    }

    async componentWillLoad() {
        console.log('Events :: Component will load');
    }

    async componentDidLoad() {
        console.log('Events :: Component did load');

        HurumaBase.setupEssentials();
    }

    render() {

        return [

            <huruma-header ngo={this.ngo}></huruma-header>,

            <h1> Events </h1>,

            <huruma-footer ngo={this.ngo}></huruma-footer>,

            <span> { HelmetService.render(this.ngo, 'Events') } </span>

        ];

    }

}
