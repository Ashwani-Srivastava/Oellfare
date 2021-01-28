import { Component, h, Prop,
         State              }   from    '@stencil/core';
import * as ngo                 from    '../../../../assets/ngo.json';

@Component({
    tag                         :   'charity-projects-detail',
    styleUrl                    :   'detail.css'
})
export class CharityProjectsDetail {

    @Prop() projectSlug         :   string;
    @Prop() ngo                 :   any                 =   ngo;

    @State() project            :   any                 =   {};

    async componentWillLoad() {
        console.log(`Project :: ${this.projectSlug} :: Component will load`, this.projectSlug);

        this.project            =   (this.ngo.projects.filter(p => p.slug === this.projectSlug))[0];

        console.log(this.project);
    }

    render() {
        console.log(`Project :: ${this.projectSlug} :: Render`);
        return (
        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <charity-header ngo={this.ngo}></charity-header>

                <div class="fh5co-hero">
                    <div class="fh5co-overlay"></div>
                    <div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style={{ 'background-image': 'url(assets/charity/images/cover_bg_2.jpg)' }} >
                        <div class="desc animate-box">
                            <h2> { this.project.name } </h2>
                            <span> Our Project </span>
                        </div>
                    </div>
                </div>

                <div id="fh5co-services-section">

                    <div class="container">
                        <div class="row text-center">
                            <div class="col-md-12">
                                <div class="services animate-box">
                                    <img style={{ 'width': '100%', 'margin-top': '-1em', 'margin-bottom': '2em' }} src={ this.project.photo.url } />
                                    <p> { this.project.description } </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            <charity-footer ngo={this.ngo}></charity-footer>
        </div>
        </div>
        );
    }

}
