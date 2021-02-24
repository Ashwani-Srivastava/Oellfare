import { Component, h, Prop,
         State              }   from    '@stencil/core';

import { HurumaBase         }   from    'huruma/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'huruma-event-detail',
    styleUrl                    :   'detail.css'
})
export class HurumaEventDetail {

    @Prop() eventSlug           :   string;
    @Prop() ngo                 :   any                 =   ngo;

    @State() event              :   any                 =   {};

    constructor () {
        console.log('Event Detail :: Constructor');
    }

    async componentWillLoad() {
        console.log(`Event :: ${this.eventSlug} :: Component will load`);

        //this.event            =   (this.ngo.event.filter(p => p.slug === this.eventSlug))[0];

        console.log(this.event);
    }

    async componentDidLoad() {
        console.log(`Event :: ${this.eventSlug} :: Component did load`);

        HurumaBase.setupEssentials();
    }

    render() {
        console.log(`Event :: ${this.eventSlug} :: Render`);
        return [

            <huruma-header ngo={this.ngo}></huruma-header>,

            <h1> Event - { this.eventSlug }</h1>,

            <huruma-footer ngo={this.ngo}></huruma-footer>,

            <span> { HelmetService.render(this.ngo, this.event.name) } </span>

        ];
    }

}
