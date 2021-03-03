import { Component, h, Prop }   from    '@stencil/core';

@Component({
    tag                         :   'huruma-press-card',
    styleUrl                    :   'press-card.css',
})
export class HurumaPressCard {

    @Prop() media               :   any;

    render() {

        return (

            <div class="single-blog">
                <img src={ this.media.photo.url } style={{ 'height': '150px', 'object-fit': 'cover', 'width': '100%' }} alt="image" />

                <div class="content">
                    <a href={this.media.link}>
                        <i class='bx bx-user'></i>
                    </a>
                    <span> { this.media.publicationName } </span>
                    <h3>
                        <a href={this.media.link}>
                            { this.media.name }
                        </a>
                    </h3>
                    <a href={this.media.link} class="blog-btn"> { this.media.date.toLocaleDateString() } </a>
                </div>
            </div>

        );
    }

}
