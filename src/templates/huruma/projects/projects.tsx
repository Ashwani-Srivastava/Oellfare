import { Component, h, Prop }   from    '@stencil/core';

import { HurumaBase         }   from    'huruma/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'huruma-projects',
    styleUrl                    :   'projects.css',
})
export class HurumaProjects {

    @Prop() ngo                 :   any                 =   ngo

    constructor () {
        console.log('Projects :: Constructor');
    }

    async componentWillLoad() {
        console.log('Projects :: Component will load');
    }

    async componentDidLoad() {
        console.log('Projects :: Component did load');

        HurumaBase.setupEssentials();
    }

    render() {
        var image=this.ngo.photos[4];
        return [
            <div class="page-wrapper">

            { this.ngo.name === 'Thozhan' ?
            <huruma-header-trans ngo={this.ngo}></huruma-header-trans>
            : <huruma-header-trans-oscar ngo={this.ngo}></huruma-header-trans-oscar>
            }

            <huruma-title name='Projects' bg-image={image}></huruma-title>
            

      <section class="features-section ptb-100">
          <div class="container-fluid">
              <div class="row align-items-center">
                  <div class="col-lg-4">
                      <div class="feature-content">
                          <span>Services</span>
                          <h3>You Can Help The Poor through us</h3>
                          <p>{this.ngo.vision} </p>
                          {/* <a href="#" class="optional-btn">
                              Read More
                              <i class="flaticon-right"></i>
                          </a> */}
                      </div>
                  </div>

                  <div class="col-lg-8">
                      <div class="feature-slider owl-carousel owl-theme">
                      { this.ngo.sdg.slice(0, 4).map(s => (
                        <div class="feature-card">
                            <div class="icon">
                                <img src={s.photo.url} alt="image"/>
                                <img src={s.photo.url} alt="image"/>
                            </div>

                            <h3>{s.name}</h3>
                            <p>{s.description<60 ? s.description : s.description.substring(0,60)+"..."}</p>
                            {/* <a href="#" class="feature-btn">
                                Join now +
                            </a> */}
                        </div>

                                  )) }


                      </div>
                  </div>
              </div>
          </div>
      </section>


      <section class="causes-section pt-100 pb-100">
                  <div class="container">
                      <div class="section-title">
                          <span>
                              <i class="flaticon-ribbon"></i>
                              Our Projects
                          </span>
                          <h2>The causes we care about</h2>
                          <p>Remember that the happiest people are not those getting more, but those giving more</p>
                      </div>

                      <div class="row"style = {{'justify-content': 'center'}}>
                      {this.ngo.projects.slice(0, 9).map(m => (
                          <div class="col-lg-4 col-md-6">
                              <div class="single-causes">
                                  <img src={m.photo.url} style={{'object-fit':'cover'}}  alt="image"/>
                                  <div class="icon">
                                      <i class="flaticon-book-1"></i>
                                  </div>

                                  <div class="causes-content">
                                      {/* <span>#Education</span> */}
                                      <h3>{m.name}</h3>
                                      <p>{ m.description < 60 ? m.description : m.description.substring(0, 100) + '...' }</p>

                                      <a  class="causes-btn-one">
                                      <ion-router-link  href={`/projects/${m.slug}`} > More </ion-router-link>
                                          <i class="flaticon-right"></i>
                                      </a>
                                  </div>
                              </div>
                          </div>))}


                      </div>
                  </div>
              </section>






              

            <huruma-footer ngo={this.ngo}></huruma-footer>,

            <span> { HelmetService.render(this.ngo, 'Projects') } </span>


            </div>















        
            
        ];

    }

}
