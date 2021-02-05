import { Component, h, Prop }   from    '@stencil/core';

import { HelmetService      }   from    'common/helmet.service';
import { Ngo                }   from    'ngo/ngo.model';

import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'charity-projects',
    styleUrl                    :   'projects.css',
})
export class CharityProjects {

    @Prop() ngo                 :   any                 =   new Ngo(ngo);

    constructor () {
        console.log('Projects :: Constructor');
    }

    async componentWillLoad() {
        console.log('Projects :: Component will load');
    }

    async componentDidLoad() {
        console.log('Projects :: Component did load');
    }

    render() {

        if(!this.ngo) return '';

        return (

        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <charity-header ngo={this.ngo}></charity-header>

                <div class="fh5co-hero">
                    <div class="fh5co-overlay"></div>
                    <div class="fh5co-cover text-center">
                        <img src='/assets/charity/images/projects-001x1024.jpg' class='cover-image' />
                        <div class="desc animate-box">
                            <h2> Our Projects </h2>
                        </div>
                    </div>
                </div>

                { this.ngo.projects.length > 0 ?
                <div id="fh5co-services-section">

                    <div class="container">
                        <div class="row text-center">
                            { this.ngo.projects.map(p => (
                            <div class="col-md-4 col-sm-6">
                                <div class="services animate-box">
                                    <img style={{ 'margin-top': '-1em', 'margin-bottom': '2em', 'height': '200px' }} src={ p.photo.url } />
                                    <h3> { p.name } </h3>
                                    <p style={{ 'max-height': '80px' }}> { p.description.length < 100 ? p.description : p.description.substring(0, 100) + '...' } </p>
                                    <p><a> <ion-router-link href={`/projects/${p.slug}`}> Learn more... </ion-router-link> </a></p>
                                
                                </div>
                            </div>
                            )) }
                        </div>
                    </div>

                </div> : null }


            <charity-footer ngo={this.ngo}></charity-footer>

            { HelmetService.render(this.ngo, 'Projects') }
        </div>
        </div>

        );

    }

}
