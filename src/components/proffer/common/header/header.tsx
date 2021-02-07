import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'proffer-header',
    styleUrl                    :   'header.css',
})
export class ProfferHeader {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (

        <header id="header" class="site-header header-style-1">
            <nav class="navigation navbar navbar-default">
                <div class="container-fluid">

                    <div class="navbar-header">
                        <button type="button" class="open-btn">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html"><img style={{ 'width': '44px'}} src={this.ngo.logo.url} /></a>
                    </div>

                    <div id="navbar" class="navbar-collapse collapse navbar-left navigation-holder">
                        <button class="close-navbar"><i class="ti-close"></i></button>

                        <ul class="nav navbar-nav">

                            <li class={location.pathname === '/' ? 'current-menu-parent' : ''}>
                                <a> <ion-router-link href='/' color={location.pathname === '/' ? 'danger' : 'light'}> Home </ion-router-link> </a>
                            </li>

                            <li class={location.pathname.startsWith('/about') ? 'current-menu-parent menu-item-has-children' : 'menu-item-has-children'}>
                                <a> <ion-router-link href='/about' color={location.pathname.startsWith('/about') ? 'danger' : 'light'}> About us </ion-router-link> </a>
                                <ul class="sub-menu">
                                    <li>
                                        <a> <ion-router-link href='/about/press-coverage' color={location.pathname.startsWith('/about') ? 'danger' : 'dark'}> Press Coverage </ion-router-link> </a>
                                    </li>
                                    <li>
                                        <a> <ion-router-link href='/about/legal' color={location.pathname.startsWith('/about') ? 'danger' : 'dark'}> Legal </ion-router-link> </a>
                                    </li>
                                </ul>
                            </li>

                            <li class={location.pathname.startsWith('/projects') ? 'current-menu-parent menu-item-has-children' : 'menu-item-has-children'}>
                                <a> <ion-router-link href='/projects' color={location.pathname.startsWith('/projects') ? 'danger' : 'light'}> Projects </ion-router-link> </a>
                                <ul class="sub-menu">
                                    { this.ngo.projects.map(p => (
                                    <li>
                                        <a> <ion-router-link href={`/projects/${p.slug}`} color='dark'> { p.name } </ion-router-link> </a>
                                    </li>
                                    )) }
                                </ul>
                            </li>

                            <li class={location.pathname.startsWith('/donate') ? 'current-menu-parent' : ''}>
                                <a> <ion-router-link href='/donate' color={location.pathname.startsWith('/donate') ? 'danger' : 'light'}> Donate </ion-router-link> </a>
                            </li>

                            <li class={location.pathname.startsWith('/volunteer') ? 'current-menu-parent' : ''}>
                                <a> <ion-router-link href='/volunteer' color={location.pathname.startsWith('/volunteer') ? 'danger' : 'light'}> Volunteer </ion-router-link> </a>
                            </li>

                            <li class={location.pathname.startsWith('/contact') ? 'current-menu-parent' : ''}>
                                <a> <ion-router-link href='/contact' color={location.pathname.startsWith('/contact') ? 'danger' : 'light'}> Contact </ion-router-link> </a>
                            </li>

                        </ul>
                    </div>{ /**  end of nav-collapse  */ } 

                    <div class="cart-search-contact">
                        <div class="donate-btn">

                            <ion-router-link href="/donate"> 
                                <a class="theme-btn-s1"> <i class="fi flaticon-like"></i>
                                        Donate Now
                                </a>
                            </ion-router-link>


                        </div>
                    </div>

                </div>{ /**  end of container  */ } 
            </nav>
        </header>
        );
    }

}
