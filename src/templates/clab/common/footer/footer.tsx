import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'clab-footer',
    styleUrl                    :   'footer.css',
})
export class ClabFooter {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (
            <footer class="app-footer border-0 text-md-left text-center">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-2 mb-md-0 mb-4">
                            <span class="pr-md-5 pr-0 py-3 border-right ">
                                <img class="pr-3" src="/assets/clab/img/logo-dark.png" srcset="/assets/clab/img/logo-dark@2x.png 2x" alt="" />
                            </span>
                        </div>
                        <div class="col-md-6 mb-md-0 mb-4">
                            <ul class="footer-link">
                                <li><a href="#">about</a></li>
                                <li><a href="#">benefits</a></li>
                                <li><a href="#">career</a></li>
                                <li><a href="#">support</a></li>
                            </ul>
                            <p class="copyright">© 2019 Clab. All right reserved.</p>
                        </div>
                        <div class="col-md-4 text-md-right">
                            <ul class="footer-link social-links">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                            </ul>
                            <p class="copyright">Support: dkmosa@gmail.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

}
