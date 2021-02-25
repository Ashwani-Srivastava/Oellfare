import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'verso-header',
    styleUrl                    :   'header.css',
})
export class VersoHeader {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (
        <header id="header" class="site-header header-style-1"></header>
        );
    }

}
