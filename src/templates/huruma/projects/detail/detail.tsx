import { Component, h, Prop,
         State              }   from    '@stencil/core';

import { HurumaBase         }   from    'huruma/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'huruma-projects-detail',
    styleUrl                    :   'detail.css'
})
export class HurumaProjectsDetail {

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

        HurumaBase.setupEssentials();
    }

    render() {
        var image=this.project.photo.url;
        console.log(`Project :: ${this.projectSlug} :: Render`);
        return [
            <div class="page-wrapper">
            <huruma-header-trans ngo={this.ngo}></huruma-header-trans>
            
            <huruma-title name={this.project.name} bg-image={image}></huruma-title>
            
        <section class="causes-details-area ptb-100" >
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="causes-details-desc">

                            <div class="causes-details-text">
                                <div class="progress pink">
                                </div>
                                
                                <h3>{this.project.name}</h3>
								<p>{this.project.description}</p>
                                  
                                </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>

            <huruma-footer ngo={this.ngo}></huruma-footer>,

            <span> { HelmetService.render(this.ngo, this.project.name) } </span>
            </div>
        ];
    }

}
