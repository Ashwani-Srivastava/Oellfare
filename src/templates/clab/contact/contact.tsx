import { Component, h, Prop }   from    '@stencil/core';

import { ClabBase          }   from    'clab/base/base'
//import { DialogService      }   from    'common/dialog.service';
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag: 'clab-contact',
    styleUrl: 'contact.css',
})
export class ClabContact {

    @Prop() ngo                 :   any                 =   ngo

    /*
    private formValue           :   any                 =   {
        name                    :   '',
        query                   :   ''
    };
    */

    constructor () {
        console.log('Contact :: Constructor');
    }

    async componentWillLoad() {
        console.log('Contact :: Component will load');
    }

    async componentDidLoad() {
        console.log('Contact :: Component did load');

        ClabBase.setupEssentials();
    }

    /*
    private handleCommonInput(e, fieldName: string): void {
        this.formValue[fieldName]=  e.target.value;
    }

    private async sendMessage() {
        debugger;

        const name              =   this.formValue.name;
        const query             =   this.formValue.query;

        if (name.length < 2) {
            await DialogService.presentAlert('Error', 'Please enter your name');
            return;
        }

        if (query.length < 10) {
            await DialogService.presentAlert('Error', 'Your query should be atleast 10 characters in length');
            return;
        }

        window.location.href    =   `https://wa.me/${this.ngo.reachOut.phone1}?text=Hi. I am ${name}. ${query}`;

    }
    */

    render() {

        return (
        <div class="page-wrapper">

                <clab-header ngo={this.ngo}></clab-header>

                <clab-footer ngo={this.ngo}></clab-footer>

                { HelmetService.render(this.ngo, 'Contact') }

            </div>
        );

    }

}
