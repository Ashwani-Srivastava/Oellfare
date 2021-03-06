import { Component, h, Prop }   from    '@stencil/core';

import { HurumaBase         }   from    'huruma/base/base'
import { HelmetService      }   from    'common/helmet.service'
import { Ngo                }   from    'ngo/ngo.model';

import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'huruma-awards',
    styleUrl                    :   'awards.css',
})
export class HurumaAwards {

    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);

    async componentDidLoad() {
        console.log('About :: Awards :: Component did load');

        HurumaBase.setupEssentials();
    }



    render() {

        return (

        <div class="page-wrapper">

            { this.ngo.name === 'Thozhan' ?
            <huruma-header-trans ngo={this.ngo}></huruma-header-trans>
            : <huruma-header-trans-oscar ngo={this.ngo}></huruma-header-trans-oscar>
            }

            <huruma-title name='Awards' parent='About us' bg-image='/assets/images/awards001x1440.jpg'></huruma-title>

            <section class="testimonials-section pb-100 mt-5">
                <div class="container">
                    <div class="section-title">
                        <span>
                            <i class="flaticon-testimonial"></i>
                            Awards
                        </span>
                        <h2> Our Recognitions </h2>
                    </div>

                    <div class="feedback-slider row">

						{ this.awards.map(award => (
                        <div class="feedback-item col-md-6 mb-4">
                            <div class="content">
                                <h3> { award.name }" </h3>
                                <p> { award.description } </p>

                                <div class="info">
                                    <img src="/assets/huruma/img/client/2.jpg" alt="image" />
                                    <h4> { award.awardedBy } </h4>
                                    <span>Charity Bingo UK</span>
                                </div>
                            </div>
                        </div>
						)) }

                    </div>
                </div>
            </section>

            <huruma-footer ngo={this.ngo}></huruma-footer>,

            <span> { HelmetService.render(this.ngo, 'Awards') } </span>

        </div>

        );

    }

    private awards = [{
        name: '100 youngsters that Swami Vivekanandha searching for',
		date: new Date(2020, 10, 1),
		awardedBy: 'Puthiya Thalaimurai Channel',
		link: '',
		description: 'Our founder M. Radhakrishnan was selected as one among the ???100 youngsters that Swami Vivekanandha searching for??? ??? a search for promising young change makers organized by Puthiya Thalaimurai Channel.'
    }, {
        name: 'Continuous effort in creating awareness ',
		date: new Date(2020, 10, 1),
		awardedBy: 'Dr. C. Sylendra Babu',
		link: '',
		description: 'Honored by Dr. C. Sylendra Babu for our continuous effort in creating awareness on road safety through various initiatives across the state.'
    }, {
        name: 'One of the best NGOs in Tamil Nadu',
		date: new Date(2020, 10, 1),
		awardedBy: 'Ma Foi K. Pandiarajan',
		link: '',
		description: 'Received an award from Ma Foi K. Pandiarajan, cabinet minister with portfolios of archaeology, Tamil language and Culture as one of the best NGOs in Tamil Nadu.'
    }, {
    }];

}
