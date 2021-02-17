import { Component, h, Prop,
         State              }   from    '@stencil/core';

import { ProfferBase        }   from    'proffer/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'proffer-projects-detail',
    styleUrl                    :   'detail.css'
})
export class ProfferProjectsDetail {

    @Prop() projectSlug         :   string;
    @Prop() ngo                 :   any                 =   ngo;

    @State() project            :   any                 =   {};

    constructor () {
        console.log('Project Detail :: Constructor');
    }

    async componentWillLoad() {
        console.log(`Project :: ${this.projectSlug} :: Component will load`);

        this.project            =   (this.ngo.projects.filter(p => p.slug === this.projectSlug))[0];

        console.log(this.project);
    }

    async componentDidLoad() {
        console.log(`Project :: ${this.projectSlug} :: Component did load`);

        ProfferBase.setupEssentials();
    }

    render() {
        console.log(`Project :: ${this.projectSlug} :: Render`);
        return (

        <div class="page-wrapper">
            <proffer-header ngo={this.ngo}></proffer-header>


            { /** start page-title  */ }
            <section class="page-title" style={{ 'background': `url(${this.project.photo.url}) center center/cover no-repeat local`, 'background-color': 'rgba(0, 0, 0, 0.5)'}}>
                <div class="page-title-container">
                    <div class="page-title-wrapper">
                        <div class="container">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <h2> { this.project.name }  </h2>
                                    <ol class="breadcrumb">
                                        <li> <a> <ion-router-link href='/' color='light'> Home </ion-router-link> </a> </li>
                                        <li> <a> <ion-router-link href='/projects' color='light'> Projects </ion-router-link> </a> </li>
                                        <li> { this.project.name } </li>
                                    </ol>
                                </div>
                            </div> { /** end row  */ }
                        </div> { /** end container  */ }
                    </div>
                </div>
            </section>
            { /** end page-title  */ }


        { /** start blog-single-section */ }
        <section class="blog-single-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-md-10 col-md-offset-1">

                        <div class="blog-content">
                            <div class="post format-standard-image">
                                <p> { this.project.description } </p>
                            </div>
                        </div>                        

                    </div>
                </div>
            </div> { /**  end container  */ } 
        </section>
        { /**  end blog-single-section  */ } 




            <proffer-footer ngo={this.ngo}></proffer-footer>

            { HelmetService.render(this.ngo, this.project.name) }
        </div>

        );
    }

}
