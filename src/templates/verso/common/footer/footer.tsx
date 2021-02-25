import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'verso-footer',
    styleUrl                    :   'footer.css',
})
export class VersoFooter {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (
            <footer class="verso-footer">
                <div class="section verso-py-9 verso-demo-bg-orange-pattern">
                    <div class="section-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="verso-widget widget_text">
                                        <h4 class="verso-widget-header">About Us</h4>
                                        <p>Why do the nations rage, and the peoples plot a vain thing? The kings of the earth take a stand, and the rulers take counsel together, against Yahweh, and against his Anointed.</p>
                                        <p>Why do the nations rage, and the peoples plot a vain thing.</p>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="verso-widget widget_recent_entries">
                                        <h4 class="verso-widget-header">Recent Posts</h4>

                                        <ul>
                                            <li class="text-truncate">
                                                <a href="post.html" class="float-left verso-mr-1 verso-widget-image" title="Post title">
                                                    <img alt="post image" src="/assets/verso/images/charity-01-100x100-notinclude.jpg" />
                                                </a>
                                                <a href="post.html">I will instruct you & teach you in the way you should go.</a>
                                                <small class="post-date d-block">September 25, 2017</small>
                                            </li>

                                            <li class="text-truncate">
                                                <a href="post.html" class="float-left verso-mr-1 verso-widget-image" title="Post title">
                                                    <img alt="post image" src="/assets/verso/images/charity-02-100x100-notinclude.jpg" />
                                                </a>
                                                <a href="post.html"> Make a joyful shout to God!</a>
                                                <small class="post-date d-block">June 12, 2017</small>
                                            </li>
                                            <li class="text-truncate">
                                                <a href="post.html" class="float-left verso-mr-1 verso-widget-image" title="Post title">
                                                    <img alt="post image" src="/assets/verso/images/charity-03-100x100-notinclude.jpg" />
                                                </a>
                                                <a href="post.html">Stronger Leads & new visitors</a>
                                                <small class="post-date d-block">May 05, 2017</small>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="verso-widget verso-widget-no-padding">
                                        <a href="#">
                                            <img src="/assets/verso/images/charity-map-500x300-notinclude.png" alt="image" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section verso-py-1">
                    <div class="section-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 text-sm-left">
                                    <div class="verso-widget widget_text">
                                        <p>
                                            Verso Template. © Oxygenna 2017
                                        </p>
                                    </div>

                                </div>
                                <div class="col-sm-6 text-sm-right">
                                    <div class="verso-widget widget_social">
                                        <div class="verso-icon-set">
                                            <a class="verso-icon-set-item verso-transition" href="#">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                            <a class="verso-icon-set-item verso-transition" href="#">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                            <a class="verso-icon-set-item verso-transition" href="#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a class="verso-icon-set-item verso-transition" href="#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
        );
    }

}
