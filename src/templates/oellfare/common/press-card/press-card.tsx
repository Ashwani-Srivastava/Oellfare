import { Component, h, Prop }   from    '@stencil/core';

@Component({
    tag                         :   'oellfare-press-card',
    styleUrl                    :   'press-card.css',
})
export class OellfarePressCard {

    @Prop() media               :   any;

    render() {
        return (
            <div class="grid"></div>
        );
    }

}
