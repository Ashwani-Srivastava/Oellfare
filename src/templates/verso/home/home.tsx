import { Component, h, Prop }   from    '@stencil/core';

import { VersoBase        }   from    'verso/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';
import * as fund                from    'assets/fund.json';

@Component({
    tag                         :   'verso-home',
    styleUrl                    :   'home.css'
})
export class VersoHome {

    @Prop() ngo                 :   any                 =   ngo;
    @Prop() fund                :   any                 =   fund;

    constructor () {
        console.log('Home :: Constructor');
    }


    async componentWillLoad() {
        console.log('Home :: componentWillLoad');
    }

    async componentDidLoad() {
        console.log('Home :: componentDidLoad');

        VersoBase.setupEssentials();
    }

    coverText = [{
        header                  :   'For the betterment of Humanity...',
        subHeader               :   'Join us in giving the Departed, their deserving final rites.',
        length                  :   5
    }, {
        header                  :   'No one is Alone',
        subHeader               :   'As long as We are here.',
        length                  :   4
    }, {
        header                  :   'Started by a bunch of College students',
        subHeader               :   'To give Love, to those who really need it.',
        length                  :   7
    }];

    render() {
        return (

            <div class="page-wrapper">

                <verso-header ngo={this.ngo}></verso-header>

                <verso-footer ngo={this.ngo}></verso-footer>

                { HelmetService.render(this.ngo, 'Home') }

            </div>

        );
    }
}
