import { Component, h, Prop,
         State              }   from    '@stencil/core';

import { VersoBase          }   from    'verso/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'verso-projects-detail',
    styleUrl                    :   'detail.css'
})
export class VersoProjectsDetail {

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

        VersoBase.setupEssentials();
    }

    render() {
        console.log(`Project :: ${this.projectSlug} :: Render`);
        return (

        <div class="page-wrapper">
            <verso-header ngo={this.ngo}></verso-header>


            <verso-footer ngo={this.ngo}></verso-footer>

            { HelmetService.render(this.ngo, this.project.name) }
        </div>

        );
    }

}
