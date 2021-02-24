import { Component, h, Prop }   from    '@stencil/core';

import { HurumaBase         }   from    'huruma/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'huruma-press-coverage',
    styleUrl                    :   'press-coverage.css',
})
export class HurumaPressCoverage {

    @Prop() ngo                 :   any                 =   ngo;

    async componentDidLoad() {
        console.log('About :: Component did load');

        HurumaBase.setupEssentials();
    }



    render() {

        return [

            <huruma-header ngo={this.ngo}></huruma-header>,

            <h1> About us - Press Coverage </h1>,

            <huruma-footer ngo={this.ngo}></huruma-footer>,

            <span> { HelmetService.render(this.ngo, 'Press Coverage') } </span>
        ];

    }

}
