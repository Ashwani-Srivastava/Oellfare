import { Component, h, Prop }   from    '@stencil/core';

@Component({
    tag                         :   'clab-press-card',
    styleUrl                    :   'press-card.css',
})
export class ClabPressCard {

    @Prop() media               :   any;

    render() {
        return (
            <div class="grid"></div>
        );
    }

}
