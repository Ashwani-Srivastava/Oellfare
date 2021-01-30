import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    '../../../assets/ngo.json';

@Component({
    tag                         :   'charity-volunteer',
    styleUrl                    :   'volunteer.css',
})
export class CharityVolunteer {

    @Prop() ngo                 :   any                 =   ngo;

    constructor () {
        console.log('Volunteer :: Constructor');
    }

    async componentWillLoad() {
        console.log('Volunteer :: Component will load');
    }

    async componentDidLoad() {
        console.log('Volunteer :: Component did load');
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
                                            <h3 class="section-title">Volunteer Details</h3>
                                        </div>
                
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Name" />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="State" />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="District" />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Date of Birth" />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Profession" />
                                            </div>
                                        </div>


                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea name="" class="form-control" id="" cols={30} rows={7} placeholder="Why I am joining?"></textarea>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="submit" value="Join as a Volunteer" class="btn btn-primary" style={{ 'width': '100%' }} />
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
