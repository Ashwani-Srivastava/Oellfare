import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'alor-header-single',
    styleUrl                    :   'header-single.css',
})
export class ProfferHeader {

    @Prop() ngo                 :   any                 =   {};

    componentDidLoad() {
        console.log('location pathname: ', location.pathname);
    }

    render() {
        return (
            <div class="header">
                <div class="container">
                    <div class="logo">
                        <ion-router-link href='/'> 
                            <img style={{ 'width': '48px'}} src={this.ngo.logo.url} />
                            <h1 style={{ 'font-size': '1.2em', 'display': 'inline' }}> { this.ngo.name } </h1>
                        </ion-router-link>
                    </div>
                    <div class="logo-right">
                        <span class="menu"><img src="/assets/alor/images/menu.png" alt=" "/></span>
                        <ul class="nav1">

                            <li> <a href="#">
                                Home
                            </a> </li>

                            <li> <a href="#about">
                                About us
                            </a> </li>

                            <li> <a href="#activities">
                                Our Activities
                            </a> </li>

                            <li> <a href="#volunteer">
                                Volunteer
                            </a> </li>

                        </ul>

                        { /**
                        <ul class='footer-grid'>
                            { this.ngo.reachOut.facebook.length > 0 ?
                            <li class='footer'><a href={this.ngo.reachOut.facebook} class="f"> </a></li>
                            : null }

                            { this.ngo.reachOut.twitter.length > 0 ?
                            <li class='footer'><a href={this.ngo.reachOut.twitter} class="t"> </a></li>
                            : null }

                            { this.ngo.reachOut.instagram.length > 0 ?
                            <li class='footer'><a href={this.ngo.reachOut.instagram} class="i"> </a></li>
                            : null }
                        </ul>
                           */ }

                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        );
    }

}
