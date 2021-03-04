import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'huruma-header-trans-oscar',
    styleUrl                    :   'header-trans-oscar.css',
})
export class HurumaHeaderTransOscar {

    @Prop() ngo                 :   any;

    render() {
        return [
        <div class="navbar-area  navbar-style-three">
            <div class="huruma-responsive-nav">
                <div class="container">
                    <div class="huruma-responsive-menu">
                        <div class="logo">
                            <a href="/">
                                <img src={ this.ngo.logo.url } class="white-logo" alt="logo" style={{ 'width': '120px' }} />
                                <img src={ this.ngo.logo.url } class="black-logo" alt="image" style={{ 'width': '120px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="huruma-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="/">
                            <img src={ this.ngo.logo.url } class="white-logo" alt="logo" style={{ 'width': '120px' }} />
                            <img src={ this.ngo.logo.url } class="black-logo" alt="image" style={{ 'width': '120px' }} />
                        </a>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
            
                                <li class="nav-item">
                                    <a class={location.pathname === '/' ? 'nav-link active' : 'nav-link' }>
                                        <ion-router-link color='white' href='/'>
                                            <span>o1</span>
                                            Home 
                                         </ion-router-link>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class={location.pathname.startsWith('/about') ? 'nav-link active' : 'nav-link' }>
                                        <ion-router-link color='white' href="/about"> 
                                            <span>o2</span>
                                            About
                                            <i class='bx bx-chevron-down'></i>
                                        </ion-router-link>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a class={location.pathname.startsWith('/about/press-coverage') ? 'nav-link active' : 'nav-link' }>
                                                <ion-router-link color='white' href="/about/press-coverage"> 
                                                    Press Coverage
                                                </ion-router-link>
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a class={location.pathname.startsWith('/about/legal') ? 'nav-link active' : 'nav-link' }>
                                                <ion-router-link color='white' href="/about/legal"> 
                                                    Legal
                                                </ion-router-link>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a class={location.pathname.startsWith('/projects') ? 'nav-link active' : 'nav-link' }>
                                        <ion-router-link color='white' href="/projects"> 
                                            <span>o3</span>
                                            Projects 
                                            <i class='bx bx-chevron-down'></i>
                                        </ion-router-link>
                                    </a>

                                    <ul class="dropdown-menu">
                                        { this.ngo.projects.map(p => (
                                        <li class="nav-item">
                                            <a class={location.pathname.startsWith(`/projects/${p.slug}`) ? 'nav-link active' : 'nav-link' }>
                                                <ion-router-link color='white' href={`/projects/${p.slug}`}> 
                                                    { p.name }
                                                </ion-router-link>
                                            </a>
                                        </li>
                                        )) }

                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a class={location.pathname.startsWith('/volunteer') ? 'nav-link active' : 'nav-link' }>
                                        <ion-router-link color='white' href="/volunteer"> 
                                            <span>o4</span>
                                            Volunteer 
                                        </ion-router-link>
                                    </a>

                                </li>

                                <li class="nav-item">
                                    <a class={location.pathname.startsWith('/donate') ? 'nav-link active' : 'nav-link' }>
                                        <ion-router-link color='white' href="/donate"> 
                                            <span>o5</span>
                                            Donate 
                                            <i class='bx bx-chevron-down'></i>
                                        </ion-router-link>
                                    </a>

                                    <ul class="dropdown-menu">

                                        <li class="nav-item">
                                            <a class={location.pathname.startsWith(`/donate/champion`) ? 'nav-link active' : 'nav-link' }>
                                                <ion-router-link color='white' href={`/donate/champion`}> 
                                                    Become a Champion
                                                </ion-router-link>
                                            </a>
                                        </li>
                                    
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a class={location.pathname.startsWith('/contact') ? 'nav-link active' : 'nav-link' }>
                                        <ion-router-link color='white' href="/contact"> 
                                            <span>o6</span>
                                            Contact
                                        </ion-router-link>
                                    </a>
                                </li>
                            
            
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        </div>,

        <huruma-sidebar-model ngo={this.ngo}></huruma-sidebar-model>
        ];
    }

}
