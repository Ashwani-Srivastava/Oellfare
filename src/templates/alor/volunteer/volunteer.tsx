import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'alor-volunteer',
    styleUrl                    :   'volunteer.css',
})
export class AlorVolunteer {

    @Prop() ngo                 :   any                 =   ngo;

    render() {
        return [
            <alor-header ngo={this.ngo}></alor-header>,
            <div> Hi </div>,
            <alor-footer></alor-footer>
        ];
    }

}
