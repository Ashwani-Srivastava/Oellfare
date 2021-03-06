import { Component, h, Prop,
         State              }   from    '@stencil/core';

import { OellfareBase          }   from    'oellfare/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'oellfare-projects-detail',
    styleUrl                    :   'detail.css'
})
export class OellfareProjectsDetail {

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

        OellfareBase.setupEssentials();
    }

    render() {
        console.log(`Project :: ${this.projectSlug} :: Render`);
        return (

        <div class="page-wrapper">
            <oellfare-header ngo={this.ngo}></oellfare-header>


            <oellfare-footer ngo={this.ngo}></oellfare-footer>

            { HelmetService.render(this.ngo, this.project.name) }
        </div>

        );
    }

}
