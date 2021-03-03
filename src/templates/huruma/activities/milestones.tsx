import { Component, h, Prop }   from    '@stencil/core';

import { HurumaBase         }   from    'huruma/base/base'
import { HelmetService      }   from    'common/helmet.service'
import { Event              }   from    'event/event.model';
import { Ngo                }   from    'ngo/ngo.model';
import * as ngo                 from    'assets/ngo.json';
import * as activities          from    'assets/events.json';

@Component({
    tag                         :   'huruma-activities-milestones',
    styleUrl                    :   'milestones.css',
})
export class HurumaActivitiesMilestones {

    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);
    @Prop() activities          :   Event[]             =   (activities as any).default.map(ev => new Event(ev));
    //private groupedActivities   :   { [key: string]: Event[] } =   {"": []};
    private groupedActivities   :   any                 =   {"": []};

    //[key: string]: string

    constructor () {
        console.log('Activities :: Milestones :: Constructor');

        this.groupedActivities  =   this.activities.reduce((r, a: Event) => {
            console.log(r);
            const year          =   a.startDate.getFullYear();
            r[year]             =   [...r[year] || [], a];
            return r;
        }, {});
    }

    async componentWillLoad() {
        console.log('Activities :: Milestones :: Component will load');
    }

    async componentDidLoad() {
        console.log('Activities :: Milestones :: Component did load');

        HurumaBase.setupEssentials();
    }

    render() {

        return [

        <div class="page-wrapper">

            <huruma-header-trans ngo={this.ngo}></huruma-header-trans>

            <huruma-title name='Milestones' parent='Activities' bg-image='/assets/images/motivationx600.jpg'></huruma-title>

            <section class="event-section pt-100" style={{ 'background': 'var(--ion-color-primary)' }}>
                <div class="container">
                    <div class="section-title">
                        <span>
                            <i class="flaticon-clipboard"></i>
                            Milestone Events
                        </span>
                        <h2> Our Humble Accomplishments</h2>
                        <p> Work hard in silence, let your success make the noise </p>
                    </div>


                    { Object.keys(this.groupedActivities).map(year => [

                    <div class="section-title">
                        <h2> { year} Milestones </h2>
                    </div>,

                    <div class="event-slider owl-carousel owl-theme mb-5">

                        <div class="event-item">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="event-time">
                                        <h3>0-130</h3>
                                        <span>5 December 2020</span>

                                        <div class="icon">
                                            <i class="flaticon-clock"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-8">
                                    <div class="event-content">
                                        <h4> ev.name </h4>

                                        <ul class="event-meta">
                                            <li>
                                                <i class="flaticon-clock"></i>
                                                8:00 - 10:00
                                            </li>

                                            <li>
                                                <i class="flaticon-pin"></i>
                                                Newyork City
                                            </li>
                                        </ul>
                                        <p>Dona ques suspendice consectetucaquuis ipsums gravida.</p>
                                        <a href="" class="event-btn-one">Join Now +</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        { this.groupedActivities[year].map(ev => (
                            <huruma-event-card event={ev}></huruma-event-card>
                        )) }
                    </div>
                    ]) }
                </div>
            </section>

            <huruma-insta-slider ngo={this.ngo}></huruma-insta-slider>

            <huruma-footer ngo={this.ngo}></huruma-footer>,

            <span> { HelmetService.render(this.ngo, 'Activities - Milestones') } </span>

        </div>

        ];

    }

}
