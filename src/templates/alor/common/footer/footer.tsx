import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'alor-footer',
    styleUrl                    :   'footer.css',
})
export class ProfferFooter {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (
            <div class="footer">
            { /** footer */ },
            <div class="container">
                <div class="footer-grids">
                    <div class="footer-grid-left">
                        <a href="index.html"><img src="/assets/alor/images/footer-logo.png" alt=" " /></a>
                    </div>
                    <div class="footer-grid-center">
                        <p>Template by<a href="http://w3layouts.com/"> W3layouts</a></p>
                    </div>
                    <div class="footer-grid-right">
                        <ul>
                            <li><a href="#" class="f"> </a></li>
                            <li><a href="#" class="t"> </a></li>
                            <li><a href="#" class="g"> </a></li>
                            <li><a href="#" class="i"> </a></li>
                        </ul>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
            { /** //footer */ }
        </div>
    );
    }

}
