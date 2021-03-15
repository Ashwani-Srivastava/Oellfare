import { Component, h, Prop,
    State              }   from    '@stencil/core';

import * as marked        	from    'marked';

import { OellfareBase         }   from    'oellfare/base/base'
import { HelmetService      }   from    'common/helmet.service'
import { Event              }   from    'event/event.model';
import { Ngo                }   from    'ngo/ngo.model';
import * as ngo                 from    'assets/ngo.json';
import * as activities          from    'assets/events.json';

@Component({
tag                         :   'oellfare-activity',
styleUrl                    :   'activity.css'
})
export class OellfareActivitiyDetail {

@Prop() activityId          :   string;
@Prop() activitySlug        :   string;
@Prop() ngo                 :   Ngo                 =   new Ngo(ngo);

@State() activity           :   any                 =   {};

private activities          :   Event[]             =   (activities as any).default.map(ev => new Event(ev));

constructor () {
   console.log('Activity :: Constructor');
}

async componentWillLoad() {
   console.log(`Activity :: ${this.activityId} :: Component will load`);

   // http://localhost:3337/activities/NMJM1KLXanca35U3580A/asdf
   this.activity            =   new Event((this.activities.filter(e => e.id === this.activityId))[0]);

   console.log(this.activity);
}

async componentDidLoad() {
   console.log(`Activity :: ${this.activityId} :: Component did load`);

   OellfareBase.setupEssentials();
}

render() {
   console.log(`Activity :: Render`, this.activity);
   return (
   <div class="page-wrapper">

       <oellfare-header-trans ngo={this.ngo}></oellfare-header-trans>

       <oellfare-title name={ this.activity.name } parent='Activities' bg-image='/assets/images/team-008x1440.jpg'></oellfare-title>

       <section class="events-details-area ptb-100">
           <div class="container">
               <div class="row">
                   <div class="col-lg-8 col-md-12">
                       <div class="events-details-desc">
                           <div class="causes-details-image">
                               <ion-slides>
                                   { this.activity.coverPhoto.map(photo => (
                                   <ion-slide>
                                       <img src={ photo.url } alt="image" />
                                   </ion-slide>
                                   )) }
                               </ion-slides>
                           </div>

                           <div class="events-details-footer">
                               <div class="article-tags">
                                   <span>
                                       <i class="bx bx-share"></i>
                                   </span>

                                   <a href="#">Share</a>
                               </div>

                               <div class="article-share">
                                   <ul class="social">
                                       <li>
                                           <a href="#" target="_blank">
                                               <i class="flaticon-facebook"></i>
                                           </a>
                                       </li>
                                       <li>
                                           <a href="#" target="_blank">
                                               <i class="flaticon-twitter"></i>
                                           </a>
                                       </li>
                                       <li>
                                           <a href="#" target="_blank">
                                               <i class="flaticon-instagram"></i>
                                           </a>
                                       </li>
                                       <li>
                                           <a href="#" target="_blank">
                                               <i class="flaticon-linkedin"></i>
                                           </a>
                                       </li>
                                   </ul>
                               </div>
                           </div>


                           <div class="events-details-content">

                               <h3> { this.activity.name } </h3>

                               <p> { this.activity.startDate.toLocaleDateString() } to { this.activity.endDate.toLocaleDateString() } </p>

                               <p innerHTML={ marked.parse(this.activity.description) }> </p>

                           </div>



                           <aside class="widget-area" id="secondary">

                               <section class="widget widget_huruma_posts_thumb">
                                   <h3 class="widget-title"> Event Coordinators</h3>

                                   { this.activity.coordinators.map(coord => (
                                   <article class="item">
                                       <a href="#" class="thumb">
                                           <span class="fullimage cover bg1" role="img" style={{ 'background': `url(${coord.photo.url})`}}></span>
                                       </a>
                                       <div class="info">
                                           <h3> { coord.name } </h3>

                                           <div class="events-details-footer" style={{ 'margin-top': '8px' }}>

                                               <div class="article-share">
                                                   <ul class="social" style={{ 'text-align': 'left' }}>
                                                       <li>
                                                           <a href="#" target="_blank">
                                                               <i class="flaticon-call"></i>
                                                           </a>
                                                       </li>
                                                       <li>
                                                           <a href="#" target="_blank">
                                                               <i class="bx bxl-whatsapp"></i>
                                                           </a>
                                                       </li>
                                                   </ul>
                                               </div>
                                           </div>

                                       </div>

                                       <div class="clear"></div>
                                   </article>
                                   )) }
                                   
                               </section>

                           </aside>

                           <p  class="event-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                           <h3>Event Location</h3>

                           <p> { this.activity.address } </p>
                           
                           <div class="map-area">
                               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799090714!2d-74.25987368715496!3d40.697670064588735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1570689677254!5m2!1sen!2sbd" ></iframe>
                           </div>
                       </div>
                   </div>


                   <div class="col-lg-4 col-md-12">
                       <aside class="widget-area" id="secondary">

                           { this.activity.volunteerRequired || this.activity.donationRequired ?
                           <section class="widget widget_categories">

                               { this.activity.volunteerRequired ? <span>
                                   <h3 class="widget-title"> Volunteers </h3>
                                   <h1> { this.activity.volunteerJoined } / { this.activity.volunteerRequired } </h1>
                               </span> : null }

                               { this.activity.donationRequired ? <span>
                                   <h3 class="widget-title"> Donation </h3>
                                   <h1> { this.activity.donationCollected } / { this.activity.donationRequired } </h1>
                               </span> : null }

                           </section> : null }

                           { this.activity.donationRequired ? 
                           <section class="widget widget_huruma_posts_thumb">
                               <h3 class="widget-title"> Donors </h3>

                               { this.activity.coordinators.slice(0, 5).map(coord => (
                               <article class="item">
                                   <a href="#" class="thumb">
                                       <span class="fullimage cover bg1" role="img"></span>
                                   </a>
                                   <div class="info">
                                       <h3> { coord.name } </h3>
                                       <h4 class="title usmall">
                                           <a href="#"></a>
                                       </h4>
                                   </div>

                                   <div class="clear"></div>
                               </article>
                               )) }
                               
                           </section>: null }

                           { this.activity.volunteerRequired ? 
                           <section class="widget widget_huruma_posts_thumb">
                               <h3 class="widget-title"> Volunteers Joined </h3>

                               { this.activity.coordinators.slice(0, 5).map(coord => (
                               <article class="item">
                                   <a href="#" class="thumb">
                                       <span class="fullimage cover bg1" role="img"></span>
                                   </a>
                                   <div class="info">
                                       <h3> { coord.name } </h3>
                                       <h4 class="title usmall">
                                           <a href="#"></a>
                                       </h4>
                                   </div>

                                   <div class="clear"></div>
                               </article>
                               )) }
                               
                           </section>: null }

                           <section class="widget widget_categories">
                               <h3 class="widget-title">Archives</h3>

                               <ul>
                                   <li><a href="#">May 2020</a></li>
                                   <li><a href="#">April 2020</a></li>
                                   <li><a href="#">June 2020</a></li>
                                   <li><a href="#">julay 2020</a></li>
                                   
                               </ul>
                           </section>
                           
                           <section class="widget widget_categories">
                               <h3 class="widget-title">Categories</h3>

                               <ul>
                                   <li><a href="#">Educataon (10)</a></li>
                                   <li><a href="#">National (20)</a></li>
                                   <li><a href="#">Sports (10)</a></li>
                                   <li><a href="#">Megazine (12)</a></li>
                                   <li><a href="#">Health (16)</a></li>
                               </ul>
                           </section>

                           <section class="widget widget_tag_cloud">
                               <h3 class="widget-title">Tags</h3>

                               <div class="tagcloud">
                                   <a href="#">Fashion</a>
                                   <a href="#">Education</a>
                                   <a href="#">Nation</a>
                                   <a href="#">Study</a>
                                   <a href="#">Health</a>
                                   <a href="#">Food</a>
                                   <a href="#">Travel</a>
                                   <a href="#">Science</a>
                               </div>
                           </section>
                       </aside>
                   </div>
               </div>
           </div>
       </section>

       <oellfare-insta-slider ngo={this.ngo}></oellfare-insta-slider>

       <oellfare-footer ngo={this.ngo}></oellfare-footer>,

       <span> { HelmetService.render(this.ngo, 'About') } </span>

   </div>
   );
}

}
