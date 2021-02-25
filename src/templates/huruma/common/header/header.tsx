import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'huruma-header',
    styleUrl                    :   'header.css',
})
export class HurumaHeader {

    @Prop() ngo                 :   any;

    render() {

        console.log('header url', this.ngo.logo.url);
        return [

        <div class="header-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="header-content">
                            <p>
                                <a href="#">Join us in Nation building... <span>Join us</span></a>
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="top-header-social">
                            <span>Follow us:</span>
                            <a href="#" target="_blank">
                                <i class='flaticon-facebook'></i>
                            </a>

                            <a href="#" target="_blank">
                                <i class='flaticon-twitter'></i>
                            </a>

                            <a href="#" target="_blank">
                                <i class='flaticon-instagram'></i>
                            </a>

                            <a href="#" target="_blank">
                                <i class='flaticon-linkedin'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>,

        <div class="navbar-area fixed-top">
            <div class="huruma-responsive-nav">
                <div class="container">
                    <div class="huruma-responsive-menu">
                        <div class="logo">
                            <a>
                                <ion-router-link color='white' href='/'>

                                    { /**
                                    <img src="/assets/huruma/img/logo-bg.png" class="white-logo" alt="logo" />
                                    */ }
                                
                                    <img src={ this.ngo.logo.url } class="black-logo" alt="image" style={{ 'width': '120px' }}/>
                                </ion-router-link>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="huruma-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="#">
                            <img src={ this.ngo.logo.url } style={{ 'background': 'url(/assets/huruma/img/logo-bg.png)', 'width': '185px', 'height': '165px', 'object-fit': 'contain', 'padding': '16px' }} class="white-logo" alt="logo" />
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
                                    <a class={location.pathname.startsWith('/milestones') ? 'nav-link active' : 'nav-link' }>
                                        <ion-router-link color='white' href="/milestones"> 
                                            <span>o4</span>
                                            Milestones 
                                            <i class='bx bx-chevron-down'></i>
                                        </ion-router-link>
                                    </a>

                                    <ul class="dropdown-menu">

                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a class={location.pathname.startsWith('/volunteer') ? 'nav-link active' : 'nav-link' }>
                                        <ion-router-link color='white' href="/volunteer"> 
                                            <span>o5</span>
                                            Volunteer 
                                        </ion-router-link>
                                    </a>

                                </li>

                                <li class="nav-item">
                                    <a class={location.pathname.startsWith('/donate') ? 'nav-link active' : 'nav-link' }>
                                        <ion-router-link color='white' href="/donate"> 
                                            <span>o6</span>
                                            Donate 
                                        </ion-router-link>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class={location.pathname.startsWith('/contact') ? 'nav-link active' : 'nav-link' }>
                                        <ion-router-link color='white' href="/contact"> 
                                            <span>o7</span>
                                            Contact
                                        </ion-router-link>
                                    </a>
                                </li>
                            </ul>

                            <div class="others-options">
                                <div class="burger-menu">
                                    <i class="flaticon-menu"></i>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>,

        <div class="sidebar-modal">
            <div class="sidebar-modal-inner">
                <div class="sidebar-about-area">
                    <div class="title">
                        <h2>About Us</h2>
                        <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                    </div>
                </div>

                <div class="sidebar-instagram-feed">
                    <h2>Instagram</h2>
                    <ul>
                        <li>
							<a href="#">
								<img src="/assets/huruma/img/sidebar/1.jpg" alt="image" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/assets/huruma/img/sidebar/2.jpg" alt="image" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/assets/huruma/img/sidebar/3.jpg" alt="image" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/assets/huruma/img/sidebar/4.jpg" alt="image" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/assets/huruma/img/sidebar/5.jpg" alt="image" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/assets/huruma/img/sidebar/6.jpg" alt="image" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/assets/huruma/img/sidebar/7.jpg" alt="image" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/assets/huruma/img/sidebar/8.jpg" alt="image" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="sidebar-contact-area">
                    <div class="contact-info">
                        <div class="contact-info-content">
                            <h2>
                                <a href="tel:+0881306298615">
                                    +088 130 629 8615
                                </a>
                                <span>OR</span>
                                <a href="mailto:huruma@gmail.com">
                                    huruma@gmail.com
                                </a>
                            </h2>
    
                            <ul class="social">
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-pinterest"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <span class="close-btn sidebar-modal-close-btn">
                    <i class="flaticon-close"></i>
                </span>
            </div>
        </div>
        ];
    }

}
