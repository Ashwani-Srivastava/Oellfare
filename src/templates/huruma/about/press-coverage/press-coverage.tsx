import { Component, h, Prop }   from    '@stencil/core';

import { HurumaBase         }   from    'huruma/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'huruma-press-coverage',
    styleUrl                    :   'press-coverage.css',
})
export class HurumaPressCoverage {

    @Prop() ngo                 :   any                 =   ngo;

    async componentDidLoad() {
        console.log('About :: Component did load');

        HurumaBase.setupEssentials();
    }



    render() {
        //var image='url('+this.ngo.photos[6]+')';
        var image=this.ngo.photos[6];
        return [
            <div class="page-wrapper">

            { this.ngo.name === 'Thozhan' ?
            <huruma-header-trans ngo={this.ngo}></huruma-header-trans>
            : <huruma-header-trans-oscar ngo={this.ngo}></huruma-header-trans-oscar>
            }
            
            <huruma-title name='Press Coverage' bg-image='/assets/images/press-001x1024.jpg'></huruma-title>

      { /** Start Causes Area  */ }
      <section class="causes-section pt-100 pb-70">
          <div class="container">
              <div class="section-title">
                  <span>
                      <i class="flaticon-ribbon"></i>
                      Our Causes
                  </span>
                  <h2>Our Press Coverage</h2>
                      
                  </div>

              <div class="row my-row justify-content-md-around align-items-stretch">
              { this.ngo.media.slice(0) .map(p => (
                           <div class="col-lg-4 col-md-6">
                           <div class="single-causes">
                               <img src={p.photo.url} alt="image"/ >
                               <div class="icon">
                                   <i class="flaticon-book-1"></i>
                               </div>
   
                               <div class="causes-content">
                                   {/* <span>{p.photo.caption}</span> */}
                                   <h3>{p.name}</h3>
                                   <p>{p.publicationName}</p>
   
                                   
                               </div>
                           </div>
                       </div>
                          )) }

                  
              </div>
          </div>
      </section>
      { /** End Causes Area  */ }


     

              

            <huruma-footer ngo={this.ngo}></huruma-footer>,

            <span> { HelmetService.render(this.ngo, 'Projects') } </span>


            </div>















        
            
        ];


    }

}







