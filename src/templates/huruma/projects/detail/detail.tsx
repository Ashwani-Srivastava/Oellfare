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
        console.log(`Project :: ${this.projectSlug} :: Render`);
        return [

            <huruma-header ngo={this.ngo}></huruma-header>,

            <h1> Projects - { this.projectSlug }</h1>,

            <huruma-footer ngo={this.ngo}></huruma-footer>,

            <span> { HelmetService.render(this.ngo, this.project.name) } </span>

        ];
    }

}
