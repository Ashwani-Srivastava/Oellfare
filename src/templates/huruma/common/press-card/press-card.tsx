import { Component, h, Prop }   from    '@stencil/core';

@Component({
    tag                         :   'huruma-press-card',
    styleUrl                    :   'press-card.css',
})
export class HurumaPressCard {

    @Prop() media               :   any;

    render() {
        return (
            <div class="grid">
                <div class="entry-media">
                    <img src={ this.media.photo.url } style={{ 'height': '360px', 'object-fit': 'cover', 'border': '2px solid #eee' }} />
                </div>
                <div class="cat">
                    <a> { this.media.publicationName } </a>
                </div>
                <div class="entry-details" style={{ 'margin-top': '4px', 'margin-left': '4px' }}>
                    <h3 style={{ 'height': '36px' }}><a href={ this.media.link }> { this.media.name.length < 50 ? this.media.name : this.media.name.substring(0, 50) + '...' } </a></h3>
                    <p class="date"> { new Date(this.media.date._seconds * 1000).toLocaleDateString("en-US") }</p>
                </div>
            </div>
        );
    }

}
