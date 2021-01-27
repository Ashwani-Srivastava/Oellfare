import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'charity-footer',
    styleUrl: 'footer.css',
})
export class CharityFooter {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (

        <footer>
            <div id="footer">
                <div class="container">
                    <div class="row">

                        <div class="col-md-6 col-md-offset-3 text-center">
                            <p class="fh5co-social-icons">

                                { this.ngo.reachOut.facebook.length !== 0 ?
                                    <a href={this.ngo.reachOut.facebook}><i class="icon-facebook2"></i></a>
                                : null }

                                { this.ngo.reachOut.twitter.length !== 0 ?
                                    <a href={this.ngo.reachOut.twitter}><i class="icon-twitter2"></i></a>
                                : null }

                                { this.ngo.reachOut.instagram.length !== 0 ?
                                    <a href={this.ngo.reachOut.instagram}><i class="icon-instagram2"></i></a>
                                : null }

                                { this.ngo.reachOut.linkedin.length !== 0 ?
                                    <a href={this.ngo.reachOut.linkedin}><i class="icon-linkedin2"></i></a>
                                : null }

                                { this.ngo.reachOut.youtube.length !== 0 ?
                                    <a href={this.ngo.reachOut.youtube}><i class="icon-youtube2"></i></a>
                                : null }

                            </p>
                            <p>Copyright 2016 Free Html5 <a href="#">Charity</a>. All Rights Reserved. <br/>Made with <i class="icon-heart3"></i> by <a href="http://freehtml5.co/" target="_blank">Freehtml5.co</a> / Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>

    );
    }

}
