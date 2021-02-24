import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'bolo-header-single',
    styleUrl                    :   'header-single.css',
})
export class BoloHeader {

    @Prop() ngo                 :   any                 =   {};
    //private showDonation        :   boolean 		=   false;

    componentDidLoad() {
        //console.log('location pathname: ', location.pathname);
    }

    render() {
        return (

        <header class={ this.ngo.name === 'Baby Needs Foundation' ? 'scroll-dark': ''}>

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div id="logo">
                            <a href="index.html">
                                <img src={this.ngo.logo.url} style={{ 'width': '64px' }} alt="" />
                            </a>
                        </div>

                        <span id="menu-btn"></span>

                        <nav>
                            <ul id="mainmenu">
                                <li><a class="active" href="#top">Home</a></li>
                                <li><a href="#section-about">About</a></li>
                                <li><a href="#section-team">Team</a></li>
                                { this.ngo.name === 'Baby Needs Foundation' ?
                                <li><a href="#section-volunteer">Volunteer</a></li>
                                    :
                                <li><a href="#section-donate">Donate</a></li> }
                            </ul>
                        </nav>

                    </div>

                </div>
            </div>
        </header>
        );
    }
}
