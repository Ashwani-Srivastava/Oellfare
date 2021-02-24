import { Build, Component, h,
         Prop, State        }   from    '@stencil/core';

import { filter, takeWhile  }   from    'rxjs/operators';

import { CharityBase        }   from    'charity/base/base';

import { AuthService        }   from    'auth/auth.service';
import { HelmetService      }   from    'common/helmet.service';
import { Logger             }   from    'common/logger';
import { Ngo                }   from    'ngo/ngo.model';
import { NgoService         }   from    'ngo/ngo.service';

import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'charity-projects-detail',
    styleUrl                    :   'detail.css'
})
export class CharityProjectsDetail {

    @Prop() projectSlug         :   string;
    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);
    private alive               :   boolean             =   true;

    @State() project            :   any                 =   {};

    async componentWillLoad() {
        console.log(`Project :: ${this.projectSlug} :: Component will load`, this.projectSlug);

        this.project            =   (this.ngo.projects.filter(p => p.slug === this.projectSlug))[0];

        if (Build.isBrowser) {

            AuthService.state$.pipe(
                takeWhile(_p => this.alive),
                filter(s => s.length > 0)
            ).subscribe(_s => {
                this.initialize();
            });

        }

        console.log(this.project);
    }

    async componentDidLoad() {
        Logger.info(`Prject :: ${this.projectSlug} :: Component did load`);
        CharityBase.setupEssentials();
    }

    private async initialize() {
        Logger.info(`Prject :: ${this.projectSlug} :: Initialize :: `);
        NgoService
            .fetchNgo(this.ngo.id)
            .pipe(takeWhile(_p => this.alive))
            .subscribe(n => this.ngo = n);
    }

    render() {
        console.log(`Project :: ${this.projectSlug} :: Render`);
        return (
        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <charity-header ngo={this.ngo}></charity-header>

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


            <charity-footer ngo={this.ngo}></charity-footer>

            { HelmetService.render(this.ngo, this.project.name) }
        </div>
        </div>
        );
    }

}
