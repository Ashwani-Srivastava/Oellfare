import { Build, Component, h,
         Prop               }   from    '@stencil/core';

import { filter, takeWhile  }   from    'rxjs/operators';

import { AuthService        }   from    'auth/auth.service';
import { HelmetService      }   from    'common/helmet.service';
import { Logger             }   from    'common/logger';
import { Ngo                }   from    'ngo/ngo.model';
import { NgoService         }   from    'ngo/ngo.service';

import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'charity-press-coverage',
    styleUrl                    :   'press-coverage.css',
})
export class PressCoverage {

    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);
    private alive               :   boolean             =   true;

    async componentWillLoad() {
        console.log('About - Press Coverage :: Component will load');

        if (Build.isBrowser) {

            AuthService.state$.pipe(
                takeWhile(_p => this.alive),
                filter(s => s.length > 0)
            ).subscribe(_s => {
                this.initialize();
            });

        }


    }

    private async initialize() {
        Logger.info('About - Press Coverage :: Initialize :: ');
        NgoService
            .fetchNgo(this.ngo.id)
            .pipe(takeWhile(_p => this.alive))
            .subscribe(n => this.ngo = n);
    }

    render() {

        return (

        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <charity-header ngo={this.ngo}></charity-header>

                <div class="fh5co-hero">
                    <div class="fh5co-overlay"></div>
                    <div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style={{ 'background-image': 'url(assets/charity/images/cover_bg_2.jpg)' }} >
                        <img src='/assets/charity/images/press-001x1024.jpg' class='cover-image' />
                        <div class="desc animate-box">
                            <h2> Press Coverage </h2>
                            <span> What the Press talks about us </span>
                        </div>
                    </div>
                </div>

                { this.ngo.media.length > 0 ?
                <div id="fh5co-blog-section" class="fh5co-section-gray">

                    <div class="container">
                        <div class="row row-bottom-padded-md">

                            {this.ngo.media.map(m => (
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="fh5co-blog animate-box">
                                    <a href={m.link}><img class="img-responsive media" src={m.photo.url} alt="" style={{ 'max-height': '240px', 'object-fit': 'cover', 'object-position': 'top', 'border': '2px solid #eee'}} /></a>
                                    <div class="blog-text">
                                        <div class="prod-title">
                                            <h3 style={{ 'height': '60px', 'overflow': 'hidden' }}><a href="#"> { m.name.length < 40 ? m.name : m.name.substring(0, 40) + '...' } </a></h3>
                                            <span class="posted_by"> { m.date.toLocaleDateString("en-US") } </span>
                                            <p style={{ 'height': '80px', 'overflow': 'hidden' }}> { m.description.length < 60 ? m.description : m.description.substring(0, 60) + '...' } </p>
                                            <p><a href={m.link}> { m.publicationName } </a></p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            )) }

                        </div>
                    </div>
                </div>: null }

            <charity-footer ngo={this.ngo}></charity-footer>

            { HelmetService.render(this.ngo, 'Press Coverage') }
        </div>
    </div>

);

    }

    connectedCallback() {
        this.alive              =   true;
    }

    disconnectedCallback() {
        this.alive              =   false;
    }


}
