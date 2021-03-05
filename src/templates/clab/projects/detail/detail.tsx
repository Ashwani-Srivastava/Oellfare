import { Component, h, Prop,
         State              }   from    '@stencil/core';

import { ClabBase          }   from    'clab/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'clab-projects-detail',
    styleUrl                    :   'detail.css'
})
export class ClabProjectsDetail {

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

        ClabBase.setupEssentials();
    }

    render() {
        console.log(`Project :: ${this.projectSlug} :: Render`);
        return (

        <div class="page-wrapper">
            <clab-header ngo={this.ngo}></clab-header>


            <clab-footer ngo={this.ngo}></clab-footer>

            { HelmetService.render(this.ngo, this.project.name) }
        </div>

        );
    }

}
