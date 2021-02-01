import { Build, Component,
         h, Prop}   from    '@stencil/core';
//import { Build, Component,
//         h, Prop, State     }   from    '@stencil/core';
//import { modalController    }   from    "@ionic/core";
//
//import { filter, takeWhile  }   from    'rxjs/operators';
//
//import { AuthService        }   from    'auth/auth.service';
//import { DialogService      }   from    'common/dialog.service';
//import { EnvironmentService }   from    'common/environment.service';
//import { Logger             }   from    'common/logger';
//import { Volunteer          }   from    'volunteer/volunteer.model';


import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'charity-donate',
    styleUrl                    :   'donate.css',
})
export class CharityDonate {

    @Prop() ngo                 :   any                 =   ngo;
    //private alive               :   boolean             =   true;

    constructor () {
        console.log('Donate :: Constructor');
    }

    async componentWillLoad() {
        console.log('Donate :: Component will load');

        if (Build.isBrowser) {
            /*
            AuthService.state$.pipe(filter(s => s.length > 0)).subscribe(_s => {
                this.initialize();
            });
             */
        }

    }

    async componentDidLoad() {
        console.log('Donate :: Component did load');
    }

        /*
    private async initialize() {
        Logger.info('Donate :: Initialize :: ');
    }
         */

    render() {

        return (

        <div id="fh5co-wrapper">
            <div id="fh5co-page">
 
                <charity-header ngo={this.ngo}></charity-header>

                <div class="fh5co-hero">
                    <div class="fh5co-overlay"></div>
                    <div class="fh5co-cover text-center">
                        <img src='/assets/charity/images/thank-010x1024.jpg' class='cover-image' />
                        <div class="desc animate-box">
                            <h2><strong>Donate</strong> for Impact</h2>
                        </div>
                    </div>

                </div>
                
                <div id="fh5co-contact" class="animate-box">
                    <div class="container">
                        <form action="#">
                            <div class="row">
                                <div class="col-md-6">
                                    <img src="/assets/images/donate-001x600.jpg" style={{ 'width': '100%' }} />
                                    <br/>
                                    <br/>
                                    <br/>
                                    <h3 class="section-title">Why Giving?</h3>

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="feature-text">
                                                    <h3> 1. You can reap social, physical, mental, and spiritual benefits. </h3>
                                                    <p> By giving your time to a charity, you get the opportunity to build your social circles by working with like-minded people. </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="feature-text">
                                                    <h3> 2. Giving promotes feelings of happiness. </h3>
                                                    <p> Helping others feels good. When you donate to a charity that is important to you, you not only help them continue their vital work, you’re also improving your emotional wellbeing, a win-win situation! </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="feature-text">
                                                    <h3> 3. Giving to Charity strengthens personal values. </h3>
                                                    <p> Having the power to improve the lives of others is, to many people, a privilege, and one that comes with its own sense of obligation.  </p>
                                                </div>
                                            </div>
                                        </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="row">

                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="button" value="Login with Gmail" class="btn btn-primary" style={{ 'width': '100%' }} />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Mobile" />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="button" value="Send Otp" class="btn btn-primary" style={{ 'width': '100%', 'margin': '4px 0px' }} />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="OTP" />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="submit" value="Verify OTP" class="btn btn-primary" style={{ 'width': '100%', 'margin': '4px 0px'  }} />
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <h3 class="section-title">Donation Details</h3>
                                        </div>
                
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Fundraiser" />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Amount" />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Referred by" />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Make Anonymous" />
                                            </div>
                                        </div>


                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea name="" class="form-control" id="" cols={30} rows={7} placeholder="Why am I donating?"></textarea>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="submit" value="Donate" class="btn btn-primary" style={{ 'width': '100%' }} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="fh5co-blog-section" class="fh5co-section-gray">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3> Our Donations </h3>
                                <p> We meant it, when we say we take 'Transparency and Trust' close to the Heart. </p>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row row-bottom-padded-md">

                            <div class='col-md-8 col-md-offset-2'>
                                <table style={{ 'width': '100%' }}>
                                    <tr>
                                        <th> Receipt # </th>
                                        <th> Donor Name </th>
                                        <th> Date </th>
                                        <th> Amount </th>
                                        <th> Towards </th>
                                    </tr>
                                {this.ngo.media.slice(0, 3).map(_m => (
                                    <tr>
                                        <td> ON-10002 </td>
                                        <td> Subash </td>
                                        <td> Jan 25, 2017 </td>
                                        <td> Rs. 1000 </td>
                                        <td> General Donation </td>
                                    </tr>
                                )) }
                                </table>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4 col-md-offset-4 text-center animate-box">
                                <a class="btn btn-primary btn-lg"> Load more </a>
                            </div>
                        </div>

                    </div>
                </div>

                <charity-footer ngo={this.ngo}></charity-footer>
            </div>
        </div>

        );

    }

    connectedCallback() {
        //this.alive              =   true;
    }

    disconnectedCallback() {
        //this.alive              =   false;
    }

}
