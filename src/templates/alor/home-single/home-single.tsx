import { Build, Component, h,
    Prop               }   from    '@stencil/core';

import { filter, takeWhile  }   from    'rxjs/operators';
import * as marked        	from    'marked';

import { AlorBase           }   from    'alor/base/base'
import { AuthService        }   from    'auth/auth.service';
import { DialogService      }   from    'common/dialog.service';
import { HelmetService      }   from    'common/helmet.service'
import { Logger             }   from    'common/logger';
import { Ngo                }   from    'ngo/ngo.model';
import { NgoService         }   from    'ngo/ngo.service';

import * as ngo                 from    'assets/ngo.json';
//import * as fund                from    'assets/fund.json';

@Component({
    tag                         :   'alor-home-single',
    styleUrl                    :   'home-single.css',
})
export class AlorHomeSingle {

    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);
    private alive               :   boolean             =   true;
    private showDonation        :   boolean 		=   false;

    private formValue           :   any                 =   {
        name                    :   '',
        subject                 :   '',
        query                   :   ''
    };


    private coverSlideOptions   :   any                 =   {
        autoplay: {
            delay: 4000
        }
    };

    async componentWillLoad() {
        console.log('Home :: Component will load');

        if (Build.isBrowser) {

            AuthService.state$.pipe(
                takeWhile(_p => this.alive),
                filter(s => s.length > 0)
            ).subscribe(_s => {
                this.initialize();
            });

        }

    }

    async componentDidLoad() {
        console.log('Home :: Component did load');

        AlorBase.setupEssentials();
    }

    private async initialize() {
        Logger.info('Home :: Initialize :: ');
        NgoService
            .fetchNgo(this.ngo.id)
            .pipe(takeWhile(_p => this.alive))
            .subscribe(n => {
                this.ngo = n;
            });
    }

    private handleCommonInput(e, fieldName: string): void {
        this.formValue[fieldName]=  e.target.value;
    }

    private async sendMessage() {

        const name              =   this.formValue.name;
        const subject           =   this.formValue.subject;
        const query             =   this.formValue.query;

        if (name.length < 2) {
            await DialogService.presentAlert('Error', 'Please enter your name');
            return;
        }

        if (subject.length < 2) {
            await DialogService.presentAlert('Error', 'Please select your Support type');
            return;
        }

/*
        if (query.length < 10) {
            await DialogService.presentAlert('Error', 'Your query should be atleast 10 characters in length');
            return;
        }
*/

        window.location.href    =   `https://wa.me/${this.ngo.reachOut.phone1}?text=Hi. I am ${name}. Contacting you for ${subject}. ${query}`;

    }

    render() {

	console.log('marked: ', marked);
        return [

        <alor-header-single ngo={this.ngo}></alor-header-single>,

        <div class="banner">;
            <ion-slides style={{ 'height': '100%' }} id='coverSlides' options={this.coverSlideOptions} >
                { this.ngo.photos.slice(0, 3).map(p => (
                    <ion-slide>
                        <img src={p} style={{ 'width': '100%', 'object-fit': 'cover' }} />
                    </ion-slide>
                )) }
            </ion-slides>
        </div>,

        <div id="history" class="history">
            { /** history */ }
            <div class="container">
                <h3>Our Vision</h3>
                <h5 class="text-center" style={{ 'font-size': '1.5em' }} > { this.ngo.vision } </h5>
            </div>
            { /** //history */ }
        </div>,

        <div class="lorum">
            { /** lorum */ }
            <div class="container">
                <div class="lorum-info">
                    <h3>Children have neither past nor future. They enjoy the present, which very few of us do. <br/> - Jean De La Bruyere - </h3>
                </div>
            </div>
            { /** //lorum */ }
        </div>,

        <div id="about" class="about">
            { /** about */ }
            <div class="container">
                <h3>ABOUT US</h3>
                <div class="about-grids">
                    <div class="col-md-6 about-grid">
                        <h2>A Glimpse into our Activities</h2>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{'width': '60%' }} >
                                <span class="sr-only">60% Complete</span>
                            </div>
                        </div>
                        <div class="about-grid-fig">
                            <img src="/assets/baby-needs/video.jpg" alt=" " />
                            <a class="play-icon popup-with-zoom-anim" href="#small-dialog">
                                <span> </span>
                            </a>
                            <div id="small-dialog" class="mfp-hide">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/tQr-Lt2PtTg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 about-grid">
                        <h2 class="community">What we do?</h2>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{'width': '60%;' }}>
                                <span class="sr-only">60% Complete</span>
                            </div>
                        </div>
                        <div class="mission-vision">
                            <div class="vission-grid">
                                <p innerHTML={ marked.parse(this.ngo.description) }> </p>
                            </div>
                        </div>
                    </div>
                    { this.ngo.name === 'Baby Needs Foundation' ?
		    <div class="col-md-6 col-md-offset-6 about-grid">
                        <h2 class="community"> How we work? </h2>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{'width': '60%;' }}>
                                <span class="sr-only">60% Complete</span>
                            </div>
                        </div>
                        <div class="mission-vision">
                            <div class="vission-grid">
                                <p> Worried about how we are going to do this? Please check our video so you can easily understand.</p>
                                <p> As we receive donors from one location we will try to get the same location volunteer to deliver in the needful orphanages also in the same location. So it will easy for the volunteers. Others which cannot be delivered will be kept stock and then delivered. </p>
                            </div>
                        </div>
                    </div>: null }
                    <div class="clearfix"> </div>
                </div>
            </div>
            { /** //about */ }
        </div>,

        <div id="activities" class="activities">
            { /** activities */ }
            <div class="container">
                <h3>OUR ACTIVITIES</h3>
                <div class="activities-grids">

                    { this.ngo.activities.map(activity => (
                        <div class="col-md-4 activities-grid">
                            <div class="activities-grid-right">
                                <h4> { activity } </h4>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                )) }


                <div class="clearfix"> </div>
            </div>
        </div>
            { /** //activities */ }
        </div>,

    <span> { this.ngo.media.length > 0 ? 
        <div class="liton">
            { /** liton */ }
            <div class="container">
                <div class="lton-inf">
                    <div class="wmuSlider example1">
                        <div class="wmuSliderWrapper">

                            { this.ngo.media.map(med => (
                                <article style={{'position': 'absolute', 'width': '100%', 'opacity': '0' }}> 
                                    <div class="banner-wrap">
                                        <div class="liton-inf">
                                            <div class="liton-fig">
                                                <img src={ med.photo.url } style={{ 'width': '50%' }} />
                                            </div>
                                            <div class="liton-info">
                                                <h3> { med.publicationName } </h3>
                                                <p> { med.description } </p>
                                            </div>
                                            <p class="tortor"> { med.name } </p>
                                        </div>
                                    </div>
                                </article>
                        )) }
                        <ul class="wmuSliderPagination">
                            <li><a href="#" class="">0</a></li>
                            <li><a href="#" class="">1</a></li>
                            <li><a href="#" class="wmuActive">2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        { /** //liton */ }
    </div>: null } </span>,

    <span> { this.ngo.team.length > 0 ? 
    <div id="team" class="team">
        <div class="container">
            <h3>MEET OUR TEAM</h3>
            <div class="team-grids">

                { this.ngo.team.map(member => (
                <div class="col-xs-6 col-md-4 col-lg-3 team-grid">
                    <div class="thumbnail team-grid-main">
                        <img src={ member.photo.url } alt=" " style={{ 'height': '36vh', 'width': '100%', 'object-fit': 'cover' }} />
                        <div class="caption pretium">
                            <h4> { member.name } </h4>
                            <p class="founder"> { member.role } </p>
                        </div>
                    </div>
                </div>
                )) }
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>: null } </span>,

	<span> { this.showDonation ?
    <div id="donate" class="news">
        <div class="container">
            <h3> Donation </h3>
	</div>
    </div>: null} </span>,

            <div id="volunteer" class="contact">
                { /** contact */ }
                <div class="container">
                    <div class="contact-header">
                        <h3> SUPPORT US </h3>
                    </div>
                    <div class="map">
                        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=chennai%20lighthou&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <div class="map-color">
                            <div class="contact-info">
                                <h4> Contact us </h4>

                                <p>
                                    { this.ngo.address } <br/>
                                    Mobile: { this.ngo.reachOut.phone1 } <br/>
                                    Email: { this.ngo.reachOut.email }
                                </p>

                                <h4>Donate Toys / Volunteer with us</h4>
                                <p></p>
                                <form>
                                    <input type="text" 
					placeholder="Name" 
                                        onInput={ (e) => this.handleCommonInput(e, 'name') } 
					required={true} />
                                    <select 
					onInput={(e) => this.handleCommonInput(e, 'subject')}
					required>
                                        <option value='Volunteering'> Like to Volunteer </option>
                                        <option value='Toy Donation'> Donate Toy </option>
                                        <option value='General Enquiry'> General Enquiry </option>
                                    </select>
                                    <textarea 
                                        onInput={ (e) => this.handleCommonInput(e, 'query') } 
					required={true} placeholder='Message...'></textarea>
                                </form>
                                <input type="button" 
                                        onClick={() => this.sendMessage()}
					value="Send Message" />
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>

                </div>
                { /** contact */ }
            </div>,

            <alor-footer ngo={this.ngo}></alor-footer>,

            <span>
                { HelmetService.render(this.ngo, 'Home') }
            </span>
            ];
    }

    connectedCallback() {
        this.alive              =   true;
    }

    disconnectedCallback() {
        this.alive              =   false;
    }


}
