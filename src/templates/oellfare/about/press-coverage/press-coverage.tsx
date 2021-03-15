import { Component, h, Prop }   from    '@stencil/core';

import { OellfareBase         }   from    'oellfare/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'oellfare-press-coverage',
    styleUrl                    :   'press-coverage.css',
})
export class OellfarePressCoverage {

    @Prop() ngo                 :   any                 =   ngo;

    async componentDidLoad() {
        console.log('About :: Component did load');

        OellfareBase.setupEssentials();
    }



    render() {
        //var image='url('+this.ngo.photos[6]+')';
        var image=this.ngo.photos[6];
        return [
            <div class="page-wrapper">

            <oellfare-header-trans ngo={this.ngo}></oellfare-header-trans>
            
            <oellfare-title name='Press Coverage' bg-image={image}></oellfare-title>

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


     

              

            <oellfare-footer ngo={this.ngo}></oellfare-footer>,

            <span> { HelmetService.render(this.ngo, 'Projects') } </span>


            </div>















        
            
        ];


    }

}




