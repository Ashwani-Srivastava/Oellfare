import { Build, Component,
         h, Prop, State     }   from    '@stencil/core';
import { modalController    }   from    "@ionic/core";

import { filter, takeWhile  }   from    'rxjs/operators';

import { AuthService        }   from    'auth/auth.service';
import { DialogService      }   from    'common/dialog.service';
import { EnvironmentService }   from    'common/environment.service';
import { Logger             }   from    'common/logger';
import { Volunteer          }   from    'volunteer/volunteer.model';

import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'charity-volunteer',
    styleUrl                    :   'volunteer.css',
})
export class CharityVolunteer {

    @Prop() ngo                 :   any                 =   ngo;
    @State() me                 :   Volunteer           =   null;
    @State() isLoggedIn         :   boolean             =   false;

    private alive               :   boolean             =   true;

    constructor () {
        console.log('Volunteer :: Constructor');
    }

    async componentWillLoad() {
        console.log('Volunteer :: Component will load');

        if (Build.isBrowser) {

            if (location.hash === '#login') {
                this.openAuthDrawer();
            }

            AuthService.state$.pipe(filter(s => s.length > 0)).subscribe(_s => {
                DialogService.presentDefaultLoader();

                AuthService.vol$.pipe(takeWhile(_f => this.alive)).subscribe(vol => {

                    DialogService.dismissDefaultLoader();
                    Logger.info('AuthDrawer :: Component will load :: vol$', vol);
                    this.me     =   vol;
                    this.isLoggedIn=AuthService.me && AuthService.me.id.length > 0 && AuthService.me.phone.length > 0;

                }, error => {
                    DialogService.dismissDefaultLoader();
                    DialogService.presentAlert('Auth Error', JSON.stringify(error));
                }); 
            });

        }


    }

    async componentDidLoad() {
        console.log('Volunteer :: Component did load');
    }

    private async openAuthDrawer() {
        console.log('show auth popup', EnvironmentService.get('firebase'));

        location.hash           =   "login";

        const modal             :   HTMLIonModalElement =   await modalController.create({
            component           :   'auth-drawer',
            cssClass            :   'auth-modal',
            swipeToClose        :   false,
            mode                :   'ios'
        })
        modal.present();

    }

    render() {

        return (

        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <charity-header ngo={this.ngo}></charity-header>

                <div class="fh5co-hero">
                    <div class="fh5co-overlay"></div>
                    <div class="fh5co-cover text-center">
                        <img src='/assets/images/team-004x1024.jpg' class='cover-image' style={{ 'width': '100%', 'fiter': 'brightness(0.75)' }} />
                        <div class="desc animate-box">
                            <h2><strong>Volunteer</strong> with us</h2>
                        </div>
                    </div>

                </div>
                
                <div id="fh5co-contact" class="animate-box">
                    <div class="container">
                        <form action="#">
                            <div class="row">
                                <div class="col-md-6">
                                    <img src="/assets/images/we-make-a-living.jpg" style={{ 'width': '100%' }} />
                                    <br/>
                                    <br/>
                                    <br/>
                                    <h3 class="section-title">Why Volunteer</h3>

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="feature-text">
                                                    <h3> 1. It’s good for your health </h3>
                                                    <p> No, we aren’t making this up. Studies have found that when you stop thinking about your own problems and focus on others, your stress levels start to decrease. </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="feature-text">
                                                    <h3> 2. A learning road </h3>
                                                    <p> Volunteers often discover their hidden talent and passion which directly improves their self-confidence. </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="feature-text">
                                                    <h3> 3. You'll make meaningful connections </h3>
                                                    <p> Volunteering lets you meet people from all walks of life. It gives you the chance to form relationships that can have a lasting impact on your life.  </p>
                                                </div>
                                            </div>
                                        </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="row">

                                        { !this.isLoggedIn ?
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="button" onClick={() => this.openAuthDrawer()} value="Login with Gmail" class="btn btn-primary" style={{ 'width': '100%' }} />
                                            </div>
                                        </div> : null }

                                        <div class="col-md-12">
                                            <h3 class="section-title">Volunteer Details</h3>
                                        </div>
                
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Name" disabled={ !this.isLoggedIn } value={ this.me?.name } />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Email" disabled={ !this.isLoggedIn } value={ this.me?.email }  />
                                            </div>
                                        </div>

                                        { /*
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="State" disabled={ !this.isLoggedIn } value={ this.me?.state.name }  />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="District" disabled={ !this.isLoggedIn } value={ this.me?.district.name }  />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Date of Birth" disabled={ !this.isLoggedIn } value={ this.me?.dob.toString() }  />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Profession" disabled={ !this.isLoggedIn } value={ this.me?.name }  />
                                            </div>
                                        </div>
                                           */ }


                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea name="" class="form-control" id="" cols={30} rows={7} placeholder="Why I am joining?" disabled={ !this.isLoggedIn } ></textarea>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="submit" value="Join as a Volunteer" class="btn btn-primary" style={{ 'width': '100%' }} disabled={ !this.isLoggedIn } />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <charity-footer ngo={this.ngo}></charity-footer>
            </div>
        </div>

    );

    }

}
