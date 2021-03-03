import { Component, h, Prop }   from    '@stencil/core';
import { Ngo                }   from    'ngo/ngo.model';

@Component({
    tag                         :   'bolo-footer',
    styleUrl                    :   'footer.css',
})
export class BoloFooter {

    @Prop() ngo                 :   Ngo;

    render() {
        return (
			<footer class="dark">
				<div class="container">
					<div class="row">
						<div class="col-md-6 sm-mb10 text-center text-md-right">
							<div class="mt10"> 
                                Built with 
                                &nbsp; <i style={{ 'color': 'red' }} class="fa fa-heart fa-lg"></i> &nbsp;
                                by <a href="https://thegrassroots.app/">Grassroots</a>
                            </div>
						</div>

						<div class="col-md-6 text-center text-md-right">
							<div class="social-icons">

                                { this.ngo.reachOut.facebook.length > 0 ?
								    <a href={this.ngo.reachOut.facebook}><i class="fa fa-facebook fa-lg"></i></a>
                                : null }

                                { this.ngo.reachOut.twitter.length > 0 ?
								    <a href={this.ngo.reachOut.twitter}><i class="fa fa-twitter fa-lg"></i></a>
                                : null }

                                { this.ngo.reachOut.instagram.length > 0 ?
								    <a href={this.ngo.reachOut.instagram}><i class="fa fa-instagram fa-lg"></i></a>
                                : null }

							</div>
						</div>
					</div>
				</div>

			</footer>
        );
    }

}
