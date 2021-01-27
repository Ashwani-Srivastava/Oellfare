import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'charity-volunteer',
  styleUrl: 'volunteer.css',
})
export class CharityVolunteer {

    @Prop() ngo                 :   any                 =   {};

    async componentWillLoad() {
        const jsonRawData       =   await fetch('assets/ngo.json');
        this.ngo                =   await jsonRawData.json();
    }


    render() {

        if(!this.ngo) return '';

        return (

        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <charity-header ngo={this.ngo}></charity-header>

                <h1 style={{'text-align': 'center', 'font-size': '32px', 'margin': '64px' }} > Volunteer Page </h1>

                <charity-footer ngo={this.ngo}></charity-footer>
            </div>
        </div>

        );

    }

}
