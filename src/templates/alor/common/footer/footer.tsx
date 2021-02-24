import { Component, h, Prop }   from    '@stencil/core';

@Component({
    tag                         :   'alor-footer',
    styleUrl                    :   'footer.css',
})
export class AlorFooter {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (
            <div class="work">
            <div class="container">
                { this.ngo.legal.regNo.length > 0 ?
                <div class="row footer">
                    <div class="col-md-3 footer-col1 text-center">
                        <ion-router-link href='/'> 
                            <img style={{ 'width': '128px'}} src={this.ngo.logo.url} />
                        </ion-router-link>
                    </div>

                    <div class="col-md-6 footer-col1 text-center" style={{ 'color': '#fff' }}>
                        <h4> Legal </h4>
                        <ul style={{ 'list-style': 'none' }}>
                            <li>Reg No. { this.ngo.legal.regNo }</li>
                            <li>Pan No. { this.ngo.legal.panNo }</li>
                            <li>12AA No. { this.ngo.legal._12ANo }</li>
                        </ul>
                    </div>

                    <div class="col-md-3 footer-col2 text-center" style={{ 'color': '#fff' }}>
                        <p>Template by <a href="http://w3layouts.com/" style={{ 'text-decoration': 'underline' }} > W3layouts </a></p>
                        <p>Powered by <a href="https://thegrassroots.app/" style={{ 'text-decoration': 'underline' }} > Grassroots </a></p>
                        <p> <br/> </p>
                        <ul class='footer-grid'>
                            { this.ngo.reachOut.facebook.length > 0 ?
                            <li class='footer'><a href={this.ngo.reachOut.facebook} class="f"> </a></li>
                            : null }

                            { this.ngo.reachOut.twitter.length > 0 ?
                            <li class='footer'><a href={this.ngo.reachOut.twitter} class="t"> </a></li>
                            : null }

                            { this.ngo.reachOut.instagram.length > 0 ?
                            <li class='footer'><a href={this.ngo.reachOut.instagram} class="i"> </a></li>
                            : null }
                        </ul>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                        : 
                <div class="row footer">
                    <div class="col-md-3 footer-col1 text-center">
                        <ion-router-link href='/'> 
                            <img style={{ 'width': '128px'}} src={this.ngo.logo.url} />
                        </ion-router-link>
                    </div>

                    <div class="col-md-9 footer-col2 text-center" style={{ 'color': '#fff' }}>
                        <p>Template by <a href="http://w3layouts.com/" style={{ 'text-decoration': 'underline' }} > W3layouts </a></p>
                        <p>Powered by <a href="https://thegrassroots.app/" style={{ 'text-decoration': 'underline' }} > Grassroots </a></p>
                        <p> <br/> </p>
                        <ul class='footer-grid'>
                            { this.ngo.reachOut.facebook.length > 0 ?
                            <li class='footer'><a href={this.ngo.reachOut.facebook} class="f"> </a></li>
                            : null }

                            { this.ngo.reachOut.twitter.length > 0 ?
                            <li class='footer'><a href={this.ngo.reachOut.twitter} class="t"> </a></li>
                            : null }

                            { this.ngo.reachOut.instagram.length > 0 ?
                            <li class='footer'><a href={this.ngo.reachOut.instagram} class="i"> </a></li>
                            : null }
                        </ul>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                }
            </div>
        </div>
    );
    }

}
