import { Component, h, Prop }   from    '@stencil/core';

@Component({
    tag                         :   'verso-press-card',
    styleUrl                    :   'press-card.css',
})
export class VersoPressCard {

    @Prop() media               :   any;

    render() {
        return (
            <div class="grid"></div>
        );
    }

}
