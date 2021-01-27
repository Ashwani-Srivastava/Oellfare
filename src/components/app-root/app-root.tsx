import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-root',
    styleUrl: 'app-root.css',
})
export class AppRoot {
    render() {
        return (
            <ion-app>
                <ion-router useHash={false}>
                    <ion-route url="/" component="charity-home" />
                    <ion-route url="/about" component="charity-about" />
                    <ion-route url="/contact" component="charity-contact" />
                    <ion-route url="/donate" component="charity-donate" />
                    <ion-route url="/projects" component="charity-projects" />
                    <ion-route url="/volunteer" component="charity-volunteer" />
                </ion-router>
                <ion-nav />
            </ion-app>
        );
    }
}
