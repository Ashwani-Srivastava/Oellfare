import { Component, h, Prop,
         State              }   from    '@stencil/core';
import * as ngo                 from    '../../../../assets/ngo.json';

@Component({
    tag                         :   'proffer-projects-detail',
    styleUrl                    :   'detail.css'
})
export class ProfferProjectsDetail {

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
                <proffer-header ngo={this.ngo}></proffer-header>

                <div class="fh5co-hero">
                    <div class="fh5co-overlay"></div>
                    <div class="fh5co-cover text-center">
                        <img src={this.project.photo.url} class='cover-image' style={{ 'width': '100%', 'fiter': 'brightness(0.75)' }} />
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
                                    <p> { this.project.description } </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            <proffer-footer ngo={this.ngo}></proffer-footer>
        </div>
        </div>
        );
    }

}