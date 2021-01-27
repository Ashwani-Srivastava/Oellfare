import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'charity-header',
    styleUrl: 'charity-header.css',
})
export class CharityHeader {

    @Prop() ngo                 :   any                 =   {};

    render() {

        if (!this.ngo) return '';
        
        console.log(this.ngo.projects);

        return [

        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-6 text-left fh5co-link">
                        <a href="tel://{ this.ngo.reachOut.phone1 }"> { this.ngo.reachOut.phone1 } </a>
                        <a href="mailto:{ this.ngo.reachOut.email }"> { this.ngo.reachOut.email } </a>
                    </div>
                    <div class="col-md-6 col-sm-6 text-right fh5co-social">
                        { this.ngo.reachOut.facebook.length !== 0 ?
                            <a href={this.ngo.reachOut.facebook} class="grow"><i class="icon-facebook2"></i></a>
                        : null }

                        { this.ngo.reachOut.twitter.length !== 0 ?
                            <a href={this.ngo.reachOut.twitter} class="grow"><i class="icon-twitter2"></i></a>
                        : null }

                        { this.ngo.reachOut.instagram.length !== 0 ?
                            <a href={this.ngo.reachOut.instagram} class="grow"><i class="icon-instagram2"></i></a>
                        : null }

                        { this.ngo.reachOut.linkedin.length !== 0 ?
                            <a href={this.ngo.reachOut.linkedin} class="grow"><i class="icon-linkedin2"></i></a>
                        : null }

                        { this.ngo.reachOut.youtube.length !== 0 ?
                            <a href={this.ngo.reachOut.youtube} class="grow"><i class="icon-youtube2"></i></a>
                        : null }

                    </div>
                </div>
            </div>
        </div>,

        <header id="fh5co-header-section" class="sticky-banner">
            <div class="container">
                <div class="nav-header">
                    <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
                    <h1 id="fh5co-logo"><a href="index.html"> { this.ngo.name } </a></h1>
                    <nav id="fh5co-menu-wrap" role="navigation">
                        <ul class="sf-menu" id="fh5co-primary-menu">
                            <li class="active">
                                <a href="/">Home 1</a>
                            </li>

                            <li><a href="about">About</a></li>

                            <li>
                                <a href="projects" class="fh5co-sub-ddown">Projects</a>
                                <ul class="fh5co-sub-menu">
                                    { this.ngo.projects.map(p => (
                                        <li><a href="#"> {p.name } </a></li>
                                    )) }
                                </ul>
                            </li>

                            <li><a href="donate">Donate</a></li>

                            <li><a href="volunteer">Volunteer</a></li>

                            <li><a href="contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        ];
    }

}
