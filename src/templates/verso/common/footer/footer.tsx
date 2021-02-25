import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'verso-footer',
    styleUrl                    :   'footer.css',
})
export class VersoFooter {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (
            <footer class="site-footer"></footer>
        );
    }

}
