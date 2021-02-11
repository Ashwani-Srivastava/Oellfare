import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'alor-header',
    styleUrl                    :   'header.css',
})
export class ProfferHeader {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (
            <div class="header">,
                <div class="container">
                    <div class="logo">
                        <ion-router-link href='/'> 
                            <img style={{ 'width': '96px'}} src={this.ngo.logo.url} />
                            <h1 style={{ 'font-size': '1em' }}> Baby Needs Foundation </h1>
                        </ion-router-link>
                    </div>
                    <div class="logo-right">
                        <span class="menu"><img src="/assets/alor/images/menu.png" alt=" "/></span>
                        <ul class="nav1">
                            <li class="cap"><a href="index.html" class="act">Home</a></li>
                            <li><a href="#history" class="scroll">History</a></li>
                            <li><a href="#about" class="scroll">About Us</a></li>
                            <li><a href="#activities" class="scroll">Activities</a></li>
                            <li><a href="#childrens" class="scroll">Childrens</a></li>
                            <li><a href="#team" class="scroll">Team Member</a></li>
                            <li><a href="#news" class="scroll">News</a></li>
                            <li><a href="#contact" class="scroll">Contact</a></li>
                        </ul>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        );
    }

}
