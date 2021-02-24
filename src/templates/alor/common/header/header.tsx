import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'alor-header',
    styleUrl                    :   'header.css',
})
export class ProfferHeader {

    @Prop() ngo                 :   any                 =   {};

    componentDidLoad() {
    }

    render() {
        return (
            <div class="header">,
                <div class="container">
                    <div class="logo">
                        <ion-router-link href='/'> 
                            <img style={{ 'width': '58px'}} src={this.ngo.logo.url} />
                            <h1 style={{ 'font-size': '1.2em', 'display': 'inline' }}> Baby Needs Foundation </h1>
                        </ion-router-link>
                    </div>
                    <div class="logo-right">
                        <span class="menu"><img src="/assets/alor/images/menu.png" alt=" "/></span>
                        <ul class="nav1">

                            <li class={location.pathname === '/' ? 'cap' : ''}> <a>
                                <ion-router-link href='/'>
                                    Home
                                </ion-router-link>
                            </a> </li>

                            <li class={location.pathname.startsWith('/about') ? 'cap' : ''}> <a>
                                <ion-router-link href='/about'>
                                    About us
                                </ion-router-link>
                            </a> </li>

                            <li class={location.pathname.startsWith('/projects') ? 'cap' : ''}> <a>
                                <ion-router-link href='/projects'>
                                    Projects
                                </ion-router-link>
                            </a> </li>

                            <li class={location.pathname.startsWith('/donate') ? 'cap' : ''}> <a>
                                <ion-router-link href='/donate'>
                                    Donate
                                </ion-router-link>
                            </a> </li>

                            <li class={location.pathname.startsWith('/volunteer') ? 'cap' : ''}> <a>
                                <ion-router-link href='/volunteer'>
                                    Volunteer
                                </ion-router-link>
                            </a> </li>

                            <li class={location.pathname.startsWith('/contact') ? 'cap' : ''}> <a>
                                <ion-router-link href='/contact'>
                                    Contact
                                </ion-router-link>
                            </a> </li>

                        </ul>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        );
    }

}
