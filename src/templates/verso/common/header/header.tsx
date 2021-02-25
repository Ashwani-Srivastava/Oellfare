import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'verso-header',
    styleUrl                    :   'header.css',
})
export class VersoHeader {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (
        <div class="verso-header">
            { /** Navigation */ }
            <div class="verso-nav verso-nav-hover verso-nav-sticky verso-nav-layout-logo-l-menu-r">
                <div class="verso-nav-inner">
                    <div class="verso-nav-container">

                        { /** Logo */ }
                        <div class="verso-nav-brand">
                            <a href="index.html">
                                <img src="/assets/verso/images/charity-classic-logo-130x100.png" alt="verso" /> Charity
                            </a>
                        </div>

                        { /** Mobile menu toggle button */ }
                        <div class="verso-nav-mobile">
                            <a id="nav-toggle" href="#">
                                <span></span>
                            </a>
                        </div>

                        { /** Menu One */ }
                        <nav class="verso-nav-menu">
                            <ul class="verso-nav-list">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="about.html">About</a>
                                </li>
                                <li>
                                    <a href="causes-list.html">Causes</a>
                                    <ul class="verso-nav-dropdown closed">
                                        <li>
                                            <a href="causes-list.html">Causes List</a>
                                        </li>
                                        <li>
                                            <a href="single-cause.html">Single Cause</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="blog.html">News</a>
                                    <ul class="verso-nav-dropdown closed">
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="single-post.html">Single Post</a>
                                        </li>
                                        <li>
                                            <a href="author.html">Author</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                                <li>
                                    <a class="verso-icon-set-item verso-transition" href="#">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a class="verso-icon-set-item verso-transition" href="#">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                            <div class="verso-nav-widget">
                                <div class="verso-widget">
                                    <div class="verso-icon-set">
                                        <a class="verso-icon-set-item verso-transition verso-search-widget-button-open" href="#">
                                            <i class="fa fa-search"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}
